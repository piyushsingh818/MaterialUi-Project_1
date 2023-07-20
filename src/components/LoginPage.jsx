import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
} from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = () => {
    // Your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };



  return (
    <>
    
      <Container maxWidth="xs" sx={{ mt: 5 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Container>
    </>
  );
};

export default LoginPage;