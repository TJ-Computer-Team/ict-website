# ICT Website - Ion OAuth Attendance Integration

This document explains how to set up Ion OAuth integration for attendance tracking, similar to the TJ VMT implementation.

## Overview

The ICT website now includes Ion OAuth authentication for secure attendance recording. Students can authenticate with their Ion credentials and record attendance using a secret code.

## Setup Instructions

### 1. Ion OAuth Application Registration

1. Go to Ion OAuth application registration (contact TJHSST IT for access)
2. Create a new OAuth application with the following settings:
   - **Application Name**: ICT Attendance
   - **Redirect URI**: `http://localhost:3000/api/auth/ion/callback` (for development)
   - **Scopes**: `read` (minimum required for user info)

### 2. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Ion OAuth Configuration
ION_CLIENT_ID=your_ion_client_id_here
ION_CLIENT_SECRET=your_ion_client_secret_here
ION_REDIRECT_URI=http://localhost:3000/api/auth/ion/callback
ION_BASE_URL=https://ion.tjhsst.edu

# Public variables (accessible in browser)
NEXT_PUBLIC_ION_CLIENT_ID=your_ion_client_id_here
NEXT_PUBLIC_ION_REDIRECT_URI=http://localhost:3000/api/auth/ion/callback

# Attendance Configuration
ATTENDANCE_CODE=your_secret_attendance_code_here
CLUB_ID=your_club_id_here
```

### 3. Production Deployment

For production deployment, update the redirect URI to your production domain:
- **Development**: `http://localhost:3000/api/auth/ion/callback`
- **Production**: `https://yourdomain.com/api/auth/ion/callback`

## How It Works

### Authentication Flow

1. **User clicks "Login with Ion"** → Redirects to Ion OAuth
2. **User authenticates** → Ion redirects back with authorization code
3. **Server exchanges code for token** → Gets access token from Ion
4. **Server fetches user info** → Validates user identity
5. **User returns to attendance page** → Ready to record attendance

### Attendance Recording Flow

1. **User enters Student ID and Code** → Validates input
2. **Server verifies attendance code** → Checks against secret code
3. **Server validates Ion token** → Ensures user is authenticated
4. **Server records attendance in Ion** → Calls Ion attendance API
5. **Success confirmation** → User sees confirmation message

## API Endpoints

### `/api/auth/ion/callback`
- **Method**: GET
- **Purpose**: Handles OAuth callback from Ion
- **Parameters**: `code`, `state`
- **Response**: Redirects to attendance page with success/error

### `/api/attendance/record`
- **Method**: POST
- **Purpose**: Records attendance in Ion system
- **Body**: `{ studentId, code, accessToken }`
- **Response**: Success/error with attendance confirmation

## Security Features

- **OAuth Authentication**: Students must authenticate with Ion
- **Code Validation**: Attendance codes are verified server-side
- **Token Validation**: Access tokens are validated with Ion
- **User Verification**: Student ID must match authenticated user
- **Secure Storage**: Sensitive data stored in environment variables

## Usage Instructions for Students

1. Navigate to the Attendance page
2. Click "Login with Ion" to authenticate
3. Enter your Ion username (Student ID)
4. Enter the attendance code provided by ICT officers
5. Click "Record Attendance"
6. Receive confirmation of successful attendance recording

## Troubleshooting

### Common Issues

1. **"Authentication failed"**
   - Check if Ion OAuth application is properly configured
   - Verify redirect URI matches exactly
   - Ensure client ID and secret are correct

2. **"Invalid attendance code"**
   - Verify the attendance code is correct
   - Check if the code has expired
   - Contact ICT officers for the current code

3. **"Student ID does not match"**
   - Ensure the entered Student ID matches the Ion username
   - Verify the user is properly authenticated

### Development Notes

- The system uses Next.js API routes for server-side processing
- OAuth tokens are handled securely on the server
- All Ion API calls are made server-side to protect credentials
- The attendance page provides real-time feedback to users

## Similar Implementation

This implementation follows the same pattern as the [TJ VMT website](https://github.com/arulandu/tjvmt), which successfully uses Ion OAuth for attendance tracking. The architecture ensures secure authentication and reliable attendance recording.
