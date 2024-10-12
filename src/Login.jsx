import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  return <div><h1>Login Page</h1>
    <Button onClick={()=>navigate('/')}>
      Go to Home
    </Button>
  </div>;
}

export default Login;
