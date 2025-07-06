import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import the local image
import pulsepointLogo from '../assets/images/pulsepoint-logo.jpg';

function LandingPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
          : 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          borderRadius: 4,
          boxShadow: 6,
          p: { xs: 2, sm: 4 },
          background: theme.palette.background.paper,
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              mb: 3,
              width: { xs: 120, sm: 180 },
              height: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={pulsepointLogo}
              alt="PulsePoint Logo"
              style={{ width: '100%', height: 'auto', borderRadius: 12, boxShadow: theme.shadows[2] }}
            />
          </Box>
          <Typography variant="h4" fontWeight={700} gutterBottom align="center">
            Welcome to PulsePoint
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom align="center">
            A Modern Hospital Management System
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Please log in to continue or explore our training opportunities.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ fontSize: '1.1rem', fontWeight: 600 }}
              onClick={() => navigate('/patient-login')}
            >
              Patient Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{ fontSize: '1.1rem', fontWeight: 600 }}
              onClick={() => navigate('/admin-login')}
            >
              Admin Login
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ backgroundColor: '#6a1b9a', color: '#fff', fontSize: '1.1rem', fontWeight: 600, '&:hover': { backgroundColor: '#4a148c' } }}
              onClick={() => window.open('https://www.icmr.gov.in/', '_blank')}
            >
              Training Gateway
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ backgroundColor: '#007BFF', color: '#fff', fontSize: '1.1rem', fontWeight: 600, '&:hover': { backgroundColor: '#0056b3' } }}
              onClick={() => window.open('https://ors.gov.in/healthid/index.jsp?NICSecurityORS=511O-T75B-O07Z-CC1R-5SR1-25QA-T0ZQ-VSSS', '_blank')}
            >
              Create ABHA (Health ID)
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LandingPage;