import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.signupSuccess) {
      setSignupSuccess(true);
      // Clear the state after displaying the message
      window.history.replaceState({}, document.title);  // Clear location state
    }
  }, [location.state]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if the username and password match the stored data
    if (userData && username === userData.name && password === userData.password) {
      // Clear inputs
      setUsername('');
      setPassword('');

      setError(false);
      
      // Redirect to the home page
      navigate('/home', { state: { loginSuccess: true } }); // Assuming '/home' is the route to the home page
    } else {
      setError(true);
      setSignupSuccess(false);

      setPassword(''); // Clear password field on failed attempt
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center p-5'>
        <form className='bg-green-800 w-[50vw] p-8 flex flex-col gap-3 rounded-md'>
          <h1 className='text-xl text-white font-extrabold text-center'>Login Here</h1>
          <input 
            type="text" 
            placeholder='Enter username' 
            className='p-2 rounded-md' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='Enter Password' 
            className='p-2 rounded-md' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <Link to="/signup" className='text-center text-green-500 underline'>Don't have an account?</Link>
          <button 
            onClick={handleLogin} 
            className='p-2 rounded-md bg-green-950 text-white font-extrabold'>
              LOGIN
          </button>
          {/* Show error message */}
          {error && (
            <Stack sx={{ width: '100%' }} spacing={2} className="mt-3">
              <Alert variant="filled" severity="error">
                Invalid username or password.
              </Alert>
            </Stack>
          )}

          {/* Show success message after signup */}
          {signupSuccess && (
            <Stack sx={{ width: '100%' }} spacing={2} className="mt-3">
              <Alert variant="filled" severity="success">
                Signup successful! Please login.
              </Alert>
            </Stack>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

// function Login() {

//   const [username, setUsername] = useState('')
//   const [password , setPassword] = useState('')
//   const [error, setError] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === "Admin" && password === "Admin123") {
//       // Clear inputs
//       setUsername("");
//       setPassword("");
      
//       // Redirect to the home page
//       navigate('/home'); // Assuming '/home' is the route to the home page
//     } else {
//       setError(true)
      
//       setPassword("");
//     }
//   }

//   return (
//     <div>
//       <div className='flex flex-col items-center justify-center p-5'>
       
//         <form className='bg-green-800 w-[50vw] p-8 flex flex-col gap-3 rounded-md'>
//         <h1 className='text-xl text-white font-extrabold text-center'>Login Here</h1>
//           <input 
//             type="text" 
//             placeholder='Enter username' 
//             className='p-2 rounded-md' 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//           />
//           <input 
//             type="password" 
//             placeholder='Enter Password' 
//             className='p-2 rounded-md' 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />

//           <Link to="/signup" className='text-center text-green-500 underline'>Don't have an account?</Link>
//           <button 
//             onClick={handleLogin} 
//             className='p-2 rounded-md bg-green-950 text-white font-extrabold'>
//               LOGIN
//           </button>
//           {error && (
//           <Stack sx={{ width: '100%' }} spacing={2}>
//             <Alert variant="filled" severity="error">
//               Invalid username or password.
//             </Alert>
//           </Stack>
//         )}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login;