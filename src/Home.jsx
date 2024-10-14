import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


function Home() {
  const location = useLocation();
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Check for login success flag
  useEffect(() => {
    if (location.state && location.state.loginSuccess) {
      setLoginSuccess(true);

      // Clear the state after displaying the message
      window.history.replaceState({}, document.title);  // Clear location state
    }
  }, [location.state]);
  return (
    <div>
      <div className='lex flex-col items-center justify-center p-5'>
      {loginSuccess && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="success">
            Login successful!
          </Alert>
        </Stack>
      )}
      </div>
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Home;