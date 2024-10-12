
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Signup from './Signup';


function Login() {
  
  // const navigate = useNavigate();
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("Admin@123");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");


  const handleLogin=()=>{
    if(username==="Admin" && password==="Admin@123"){
      setIsLoggedIn(true);
      setError("");
   }
   else{
    // alert("Hey hey Wrong User Name or Password You Ediot !")
    setError("Wrong Username or Password!"); 
    setIsLoggedIn(false);
   }
   if (isLoggedIn) {
   
  }
  
  
  }

  
  return (
    <div>
      <div className='w-[25vw] h-[50vh] bg-zinc-900 p-5 flex items-center justify-center flex-col text-green-500'>
        <h1 className='text-2xl font-bold text-center mb-10'>Login Here</h1>

        <input type="text" placeholder='Enter userame Please : ' className='p-2 m-2 rounded-md w-[17vw]' value={username} onChange={(evt) => setUsername(evt.target.value)} />

        <input type="password" placeholder='Enter your Password : ' className='p-2 m-2 rounded-md w-[17vw]' value={password} onChange={(evt) => setPassword(evt.target.value)} />
        <a href="/" >Forgot Password ?</a>
        <button className='bg-green-500 text-black font-extrabold rounded-md mt-3 p-2 w-[17vw]' onClick={handleLogin}>Login</button>
        {error && (
          <Stack sx={{ width: '100%', marginTop: '1rem' }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        {/* <Link to="/">Login</Link> */}
      </div>

    </div>
  )
}

export default Login

