import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Alert, Card, CardContent, useTheme } from '@mui/material';

function PatientSignUp() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const theme = useTheme();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Replace with your API call
    setSuccessMessage('Account created successfully! Redirecting to login...');
    setTimeout(() => navigate('/patient-login'), 2000);
  };

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
      <Container maxWidth="sm">
        <Card elevation={6} sx={{ borderRadius: 4, p: { xs: 2, sm: 4 }, background: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center" fontWeight={700}>
              Patient Sign Up
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }} onSubmit={handleSignUp}>
              <TextField
                label="Full Name"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                required
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, fontWeight: 600, fontSize: '1.1rem', py: 1.5 }}
                type="submit"
              >
                Sign Up
              </Button>
              {successMessage && (
                <Alert severity="success" sx={{ mt: 3 }}>
                  {successMessage}
                </Alert>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default PatientSignUp;
