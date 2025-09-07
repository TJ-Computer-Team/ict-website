import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { studentId, code, accessToken } = await request.json()

    if (!studentId || !code || !accessToken) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Verify the attendance code
    if (code !== process.env.ATTENDANCE_CODE) {
      return NextResponse.json({ error: 'Invalid attendance code' }, { status: 401 })
    }

    // Verify the access token and get user info
    const userResponse = await fetch('https://ion.tjhsst.edu/api/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!userResponse.ok) {
      return NextResponse.json({ error: 'Invalid access token' }, { status: 401 })
    }

    const userData = await userResponse.json()

    // Verify that the student ID matches the authenticated user
    if (userData.username !== studentId) {
      return NextResponse.json({ error: 'Student ID does not match authenticated user' }, { status: 403 })
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

    return NextResponse.json({
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
    return NextResponse.json({ 
      error: 'Failed to record attendance',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
