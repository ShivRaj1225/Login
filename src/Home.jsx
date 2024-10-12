import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <>
       <h1 className='text-center text-2xl font-bold'>Be The Member of our Community</h1>
      <Button onClick={()=>navigate('/login')}>Go to Login</Button>
   
    <div className='w-full h-screen bg-zinc-800 flex items-center justify-center' >
       
       <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
            width: "80vw",
            height: "80vh",
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
        }}
        />
      
    </ThemeProvider>
    
    </div>
    </>
  )
}

export default Home
