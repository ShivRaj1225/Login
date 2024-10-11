import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Box from '@mui/joy/Box';
import React from 'react'

function Login() {
  return (
    <div>
        <Box component="section" sx={{ m:3, p: 0, border: '1px solid grey' }}>
            <h2>Login</h2>
            <Input placeholder="Enter your username" variant="outlined" />
            <Input placeholder="Enter your password" variant="outlined" />
        </Box>
    </div>
  )
}

export default Login
