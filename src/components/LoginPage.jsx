import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  ButtonGroup,
  Card,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(validate()){
       return console.log("proceed")
    }
  };
  const validate = () => {
    let filledData = true;
    if(username === null || username === ""){
      console.log("empty username")
      filledData = false;
    }
    if(password === null || password === ""){
      console.log("empty password")
      filledData = false;
    }
    return filledData;
}
  const signUpNavigate = () => {
    // Your login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
  };

 



  return (
    <>
    <Card sx={{ backgroundColor: "#f5f5f5", width: "350px", padding: '20px',marginLeft:"35%",marginTop:"80px" }}>
      <Container maxWidth="xs" sx={{ mt: 5 }}>
        <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e)=>setPassword(e.target.value)}          
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e)=>setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <ButtonGroup>
        <Button variant="contained" type="submit" color="primary" style={{ marginRight: '10px' }} onClick={validate}>
          Login
        </Button>
        <Button variant="outlined" color="primary" onClick={signUpNavigate}>
          <NavLink to={"/signup"} style={{textDecoration:"none"}}>Sign Up</NavLink>
          
        </Button>
        </ButtonGroup>
        </form>
      </Container>
      </Card>
    </>
  );
};

export default LoginPage;