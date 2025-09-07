import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { studentId, code, accessToken } = req.body

  if (!studentId || !code || !accessToken) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Verify the attendance code
    if (code !== process.env.ATTENDANCE_CODE) {
      return res.status(401).json({ error: 'Invalid attendance code' })
    }

    // Verify the access token and get user info
    const userResponse = await fetch('https://ion.tjhsst.edu/api/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!userResponse.ok) {
      return res.status(401).json({ error: 'Invalid access token' })
    }

    const userData = await userResponse.json()

    // Verify that the student ID matches the authenticated user
    if (userData.username !== studentId) {
      return res.status(403).json({ error: 'Student ID does not match authenticated user' })
    }

    // Record attendance in Ion system
    const attendanceResponse = await fetch('https://ion.tjhsst.edu/api/attendance', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        club_id: process.env.CLUB_ID,
        student_id: studentId,
        timestamp: new Date().toISOString(),
        event_type: 'meeting',
      }),
    })

    if (!attendanceResponse.ok) {
      throw new Error('Failed to record attendance in Ion')
    }

    const attendanceData = await attendanceResponse.json()

    res.status(200).json({
      success: true,
      message: 'Attendance recorded successfully',
      data: {
        student: userData.username,
        timestamp: attendanceData.timestamp,
        club: 'ICT',
      },
    })
  } catch (error) {
    console.error('Attendance recording error:', error)
    res.status(500).json({ 
      error: 'Failed to record attendance',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
