import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code, state } = req.query

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is required' })
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://ion.tjhsst.edu/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.ION_CLIENT_ID!,
        client_secret: process.env.ION_CLIENT_SECRET!,
        redirect_uri: process.env.ION_REDIRECT_URI!,
        code: code as string,
      }),
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token')
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Get user information from Ion
    const userResponse = await fetch('https://ion.tjhsst.edu/api/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user information')
    }

    const userData = await userResponse.json()

    // Store user session (you might want to use a proper session management solution)
    const sessionData = {
      accessToken,
      user: userData,
      timestamp: Date.now(),
    }

    // Redirect back to attendance page with success
    const redirectUrl = state ? `/attendance?success=true&user=${encodeURIComponent(userData.username)}` : '/attendance?success=true'
    
    res.redirect(redirectUrl)
  } catch (error) {
    console.error('OAuth callback error:', error)
    res.redirect('/attendance?error=authentication_failed')
  }
}
