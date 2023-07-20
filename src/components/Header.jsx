import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button, styled, InputBase, Tab, Tabs, Toolbar, alpha, Avatar, Icon, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <h1>Logo</h1>
          <Search style={{ marginLeft: "auto" }}>
            <SearchIconWrapper style={{ color: "black" }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='search...'>
            </StyledInputBase>
          </Search>
          <Tabs style={{ marginLeft: "auto" }}>
            <Tab component={Link} sx={{color:"white"}} to="/" label="Products" />
            <Tab component={Link} sx={{color:"white"}} to="/services" label="Services" />
            <Tab component={Link} sx={{color:"white"}} to="/contact_us" label="Contact us" />
            <Tab component={Link} sx={{color:"white"}} to="/about" label="About us" />
          </Tabs>
          <Button component={Link} to="/login" sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
          <Button sx={{ marginLeft: "10px" }} variant='contained'>Signup</Button>
          <Icon sx={{ padding: "20px" }}>
            <Badge badgeContent={2} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Icon>
          <Avatar
            onClick={e => setOpen(true)}
          />
        </Toolbar>
        <Menu
          sx={{ marginTop: "40px" }}
          id="demo-positioned-menu"
          open={open}
          onClose={e => setOpen(false)}
          aria-labelledby="demo-positioned-button"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  )
}

export default Header

const Search = styled("div")(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));