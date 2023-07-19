import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button, styled, InputBase, Tab, Tabs, Toolbar, alpha, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {

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
            <Tab component={Link} to="/" label="Products" />
            <Tab component={Link} to="/services" label="Services" />
            <Tab component={Link} to="/contact_us" label="Contact us" />
            <Tab component={Link} to="/about" label="About us" />
          </Tabs>
          <Button component={Link} to="/login" sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
          <Button sx={{ marginLeft: "10px" }} variant='contained'>Signup</Button>
          <Avatar>
            <Menu
              id="basic-menu"
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem >Profile</MenuItem>
              <MenuItem >My account</MenuItem>
              <MenuItem >Logout</MenuItem>
            </Menu>
          </Avatar>
        </Toolbar>
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