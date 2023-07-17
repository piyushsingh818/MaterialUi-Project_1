import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar,Button,ButtonGroup,Container, Tab, Tabs, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              <h1>Logo</h1>
                <Tabs style={{marginLeft:"auto"}}>
                    <Tab component={Link} to="/" label="Products"/>
                    <Tab component={Link} to="/services" label="Services" />
                    <Tab component={Link} to="/contact_us" label="Contact us" />
                    <Tab component={Link} to="/about" label="About us" />
                </Tabs>
                <Button sx={{marginLeft:"auto"}} variant='contained'>Login</Button>
                <Button sx={{marginLeft:"10px"}} variant='contained'>Signup</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header