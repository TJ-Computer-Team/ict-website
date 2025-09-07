import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  if (!code) {
    return NextResponse.json({ error: 'Authorization code is required' }, { status: 400 })
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
        code: code,
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
    // const sessionData = {
    //   accessToken,
    //   user: userData,
    //   timestamp: Date.now(),
    // }

    // Redirect back to attendance page with success
    const redirectUrl = state ? `/attendance?success=true&user=${encodeURIComponent(userData.username)}` : '/attendance?success=true'
    
    return NextResponse.redirect(redirectUrl)
  } catch (error) {
    console.error('OAuth callback error:', error)
    return NextResponse.redirect('/attendance?error=authentication_failed')
  }
}
