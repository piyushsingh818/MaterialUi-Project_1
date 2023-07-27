import React, { useEffect, useState } from 'react';
import {
  Container,
  TextField,
  Button,
  ButtonGroup,
  Card,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error , seterror] = useState("");
  const [logindata, setloginData]= useState([])
  const navigate = useNavigate();
 
    useEffect(()=>{
      (async function(){
        let response= await axios.get("http://localhost:8000/users");
        console.log("response", response.data);
        setloginData(response.data);
      })()
    },[]);

    const handleLogin=(e)=>{
      e.preventDefault();
      let usernamedata= logindata.map((name)=> name.username);
      let passdata= logindata.map((pass)=> pass.password);
      let loginName= usernamedata.filter((f)=> f==username);
      let loginpass= passdata.filter((f)=> f==password);
      if(loginName.length!=0 && loginpass.length!=0){
          localStorage.setItem("loginAuth", JSON.stringify({username,password}))
          window.location.href= "/"
      }else{
        alert("Invalid credentials!!")
      }
    }
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
          onChange={(e)=>setUsername(e.target.value)}          
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <ButtonGroup>
          <p style={{color:'red'}}>{error=="" ? "": error}</p>
        <Button variant="contained" type="submit" color="primary" style={{ marginRight: '10px' }} >
          Login
        </Button>
        <Button variant="outlined" color="primary" >
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