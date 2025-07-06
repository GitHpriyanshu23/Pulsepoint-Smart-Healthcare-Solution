import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ThemeModeContext } from '../index';

function DoctorNavbar() {
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useContext(ThemeModeContext);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    navigate('/doctor-login'); // Redirect to doctor login page after logout
  };

  return (
    <AppBar position="static" style={{ background: '#1976d2' }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/doctor-panel')}
        >
          Doctor Dashboard
        </Typography>
        <Button color="inherit" onClick={() => navigate('/doctor-panel')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/opd-queue')}>
          OPD Queue
        </Button>
        <Button color="inherit" onClick={() => navigate('/medical-reports')}>
          Medical Reports
        </Button>
        <Button color="inherit" onClick={handleLogout}>
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
}

export default DoctorNavbar;
