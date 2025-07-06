import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Box,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PatientLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.email === 'patient@example.com' && credentials.password === 'password') {
      localStorage.setItem('role', 'patient');
      navigate('/patient-dashboard');
    } else {
      setError('Invalid email or password');
    }
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
            <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
              Patient Login
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box component="form" onSubmit={handleLogin} noValidate>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={credentials.email}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, fontWeight: 600, fontSize: '1.1rem', py: 1.5 }}
              >
                Login
              </Button>
            </Box>
            <Box mt={3} textAlign="center">
              <Typography variant="body2">
                Don't have an account?{' '}
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => navigate('/patient-signup')}
                >
                  Sign Up
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default PatientLogin;
