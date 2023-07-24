import React from 'react'
import { styled } from '@mui/material/styles';
import { Link,useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {

  // const location = useLocation();

  // const isLoginPage = location.pathname === '/';

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#3494d0",
    color:"white"
  }));

  return (
    <>
    <Box sx={{ flexGrow: 1 ,backgroundColor:"#1976d2",marginTop:"3rem"}}>
      <Grid container spacing={4}>
        <Grid xs={12} md={5} lg={4}>
          <Item>Email subscribe section</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={12} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2,listStyle:"none"}}>
                <li>Career</li>
                <li>About Us</li>
                <li>FAQ</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >

              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2,listStyle:"none" }}>
                <li>Career</li>
                <li>About Us</li>
                <li>FAQ</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Footer