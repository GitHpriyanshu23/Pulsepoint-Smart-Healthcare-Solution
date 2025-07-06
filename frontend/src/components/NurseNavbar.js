import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { Home, ExitToApp, Assignment, Brightness4, Brightness7 } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ThemeModeContext } from '../index';

const NurseNavbar = () => {
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useContext(ThemeModeContext);

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/'); // Redirect to landing page or login
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          style={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/nurse-panel')}
        >
          Nurse Dashboard
        </Typography>

        <IconButton
          color="inherit"
          onClick={() => navigate('/nurse-panel')}
          title="Home"
        >
          <Home />
        </IconButton>

        <Button
          color="inherit"
          startIcon={<Assignment />}
          onClick={() => navigate('/bed-management')} // Example path
        >
          Bed Management
        </Button>

        <Button
          color="inherit"
          startIcon={<Assignment />}
          onClick={() => navigate('/inventory-management')} // Example path
        >
          Inventory
        </Button>

        <Button
          color="inherit"
          startIcon={<ExitToApp />}
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton sx={{ ml: 2, color: 'white' }} onClick={toggleColorMode}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default NurseNavbar;
