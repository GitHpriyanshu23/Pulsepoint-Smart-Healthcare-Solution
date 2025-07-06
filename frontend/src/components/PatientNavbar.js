import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Tooltip,
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/pulsepoint.png'; // Ensure the path is correct
import { ThemeModeContext } from '../index';

function PatientNavbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleColorMode } = useContext(ThemeModeContext);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear patient authentication token
    localStorage.removeItem('role');
    navigate('/patient-login'); // Redirect to Patient Login
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Dashboard', path: '/patient-dashboard' },
    { text: 'Book OPD', path: '/book-opd' },
    { text: 'Reserve Bed', path: '/reserve-bed' },
    { text: 'Medical Reports', path: '/medical-reports' },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          {/* Logo and Title */}
          <Box display="flex" alignItems="center" flexGrow={1}>
            <img
              src={logo}
              alt="PulsePoint Logo"
              style={{ width: '40px', height: '40px', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => navigate('/patient-dashboard')}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
              onClick={() => navigate('/patient-dashboard')}
            >
              PulsePoint Patient
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  marginLeft: '15px',
                  '&:hover': { color: '#4caf50' },
                }}
              >
                {item.text}
              </Button>
            ))}
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{
                color: 'white',
                marginLeft: '15px',
                '&:hover': { color: '#e91e63' },
              }}
            >
              Logout
            </Button>
            <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <IconButton sx={{ ml: 2, color: 'white' }} onClick={toggleColorMode}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile Navigation */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          width={250}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ backgroundColor: 'primary.main', color: 'white', height: '100%' }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ '&:hover': { backgroundColor: '#444' } }}
              >
                <ListItemText primary={item.text} sx={{ color: 'white' }} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={handleLogout}
              sx={{ '&:hover': { backgroundColor: '#444' } }}
            >
              <ListItemText primary="Logout" sx={{ color: '#e91e63' }} />
            </ListItem>
            <ListItem>
              <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                <IconButton sx={{ color: 'white' }} onClick={toggleColorMode}>
                  {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Tooltip>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default PatientNavbar;
