import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Box,
  Card,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const countries = ['India', 'USA', 'UAE','China','Russia']; // Replace with your actual list of countries

const genders = ['Male', 'Female', 'Other'];

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail ] = useState("");
  const [phone, setPhone ] = useState("");
  const [country, setCountry ] = useState("");
  const [gender, setGender ] = useState("");
  const [address, setAddress ] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    let registrationObj = {username,password,fullName,email,phone,country,address,gender};
    if(isUserRegistered(username)){
      console.warn("already registered")
      return;
    }
    fetch("http://localhost:8000/users",{
      method:"POST",
      headers:{"content-type" :"application/json"},
      body:JSON.stringify(registrationObj),
    }).then((res)=>{console.warn("Registred successfully")
          navigate("/login");
  }).catch((err)=>{console.warn(err.message)
  });
  }

  const isUserRegistered = (username)=>{
    return false;
  };

  return (
    <Box p={3}>
      <Card style={{width:"700px",margin:"5%"}}>
      <form style={{padding:50}} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Username"
              name="username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Full Name"
              name="fullName"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="tel"
              label="Phone"
              name="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                required
                name="country"
                value={country}
              onChange={(e)=>setCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              required
              name="address"
              minRows={3}
              placeholder="Address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              style={{ width: '100%', padding: '8px', resize: 'vertical' }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                name="gender"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
              >
                {genders.map((gender) => (
                  <FormControlLabel
                    key={gender}
                    value={gender}
                    control={<Radio />}
                    label={gender}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      </Card>
    </Box>
  );
};

export default SignUp;
