"use client"
import { useState, useEffect } from 'react'
import { Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function AttendancePage() {
  const [studentData, setStudentData] = useState({
    studentId: '',
    code: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info', text: string } | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    // Check for OAuth callback parameters
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    const error = urlParams.get('error')
    const user = urlParams.get('user')

    if (success === 'true' && user) {
      setIsAuthenticated(true)
      setUserInfo({ username: user })
      setMessage({ type: 'success', text: `Successfully authenticated as ${user}` })
    } else if (error) {
      setMessage({ type: 'error', text: 'Authentication failed. Please try again.' })
    }
  }, [])

  const initiateOAuth = () => {
    const clientId = process.env.NEXT_PUBLIC_ION_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_ION_REDIRECT_URI
    const state = 'attendance_' + Date.now()
    
    const oauthUrl = `https://ion.tjhsst.edu/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri || '')}&response_type=code&state=${state}&scope=read`
    
    window.location.href = oauthUrl
  }

  const recordAttendance = async () => {
    if (!studentData.studentId || !studentData.code) {
      setMessage({ type: 'error', text: 'Please fill in both Student ID and Code' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/attendance/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentId: studentData.studentId,
          code: studentData.code,
          accessToken: userInfo?.accessToken, // This would come from OAuth flow
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: `Attendance recorded successfully for ${data.data.student}` })
        setStudentData({ studentId: '', code: '' })
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to record attendance' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users className="w-8 h-8 mr-3 text-blue-600" />
            ICT Attendance
          </h1>
          <p className="text-gray-600 mt-2">
            Record your attendance using your Ion credentials and attendance code
          </p>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`rounded-lg p-4 mb-6 flex items-center ${
            message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
            message.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
            'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            {message.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
            {message.type === 'error' && <XCircle className="w-5 h-5 mr-2" />}
            {message.type === 'info' && <AlertCircle className="w-5 h-5 mr-2" />}
            {message.text}
          </div>
        )}

        {/* Authentication Status */}
        {isAuthenticated ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800">
                Authenticated as: <strong>{userInfo?.username}</strong>
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-800">
                  Please authenticate with Ion to record attendance
                </span>
              </div>
              <button
                onClick={initiateOAuth}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login with Ion
              </button>
            </div>
          </div>
        )}

        {/* Attendance Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Record Attendance</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID (Ion Username)
              </label>
              <input
                type="text"
                placeholder="Enter your Ion username"
                value={studentData.studentId}
                onChange={(e) => setStudentData({ ...studentData, studentId: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isAuthenticated}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attendance Code
              </label>
              <input
                type="password"
                placeholder="Enter attendance code"
                value={studentData.code}
                onChange={(e) => setStudentData({ ...studentData, code: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isAuthenticated}
              />
            </div>
            <button
              onClick={recordAttendance}
              disabled={!isAuthenticated || isLoading}
              className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                !isAuthenticated || isLoading
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Recording Attendance...' : 'Record Attendance'}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Use</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Click "Login with Ion" to authenticate with your Ion account</li>
            <li>• Enter your Ion username (Student ID)</li>
            <li>• Enter the attendance code provided by ICT officers</li>
            <li>• Click "Record Attendance" to submit your attendance</li>
            <li>• Your attendance will be automatically recorded in the Ion system</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
