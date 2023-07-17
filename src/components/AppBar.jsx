import React from 'react'
import { AppBar,Button,ButtonGroup,Container, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneIcon from '@mui/icons-material/Phone';

const AppBarComp = () => {
  return (
    <div>
    {/* <Container> */}
        <AppBar>
            <Toolbar>
                <Tabs style={{marginLeft:"auto"}}>
                    <Tab label="Products"/>
                    <Tab label="Services" />
                    <Tab label="Contact us" />
                    <Tab label="About us" />
                </Tabs>
                <Button sx={{marginLeft:"auto"}} variant='contained'>Login</Button>
                <Button sx={{marginLeft:"10px"}} variant='contained'>Signup</Button>
                {/* used for icon based  */}
                {/* <Typography variant='h2' style={{flexGrow:1}}>Logo</Typography>
                <Button variant='inherit' startIcon={<HomeIcon/>}>Home</Button>
                <Button variant='inherit' startIcon={<MenuIcon/>}>Menu</Button>
                <Button variant='inherit' startIcon={<InfoIcon/>}>About</Button>
                <Button variant='inherit' startIcon={<PhoneIcon/>}>Contact us</Button>
                <Button variant='inherit' startIcon={<LoginIcon/>}>Log in</Button>
                <Button variant='inherit' startIcon={<PersonAddAltIcon/>}>Sign up</Button>
                <Button variant='inherit' style={{width:"50px"}}  startIcon={<ShoppingCartIcon style={{width:"50px",fontSize:"40px"}}/>}></Button> */}
            </Toolbar>
        </AppBar>
    {/* </Container> */}
    </div>
  )
}

export default AppBarComp