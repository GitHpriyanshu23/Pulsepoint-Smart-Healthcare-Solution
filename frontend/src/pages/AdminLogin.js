import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  MenuItem,
  Box,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '', role: 'admin' });
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password, role } = credentials;
    if (
      (email === 'admin@example.com' && password === 'password' && role === 'admin') ||
      (email === 'doctor@example.com' && password === 'password' && role === 'doctor') ||
      (email === 'nurse@example.com' && password === 'password' && role === 'nurse')
    ) {
      localStorage.setItem('role', role);
      if (role === 'admin') navigate('/admin-dashboard');
      if (role === 'doctor') navigate('/doctor-panel');
      if (role === 'nurse') navigate('/nurse-panel');
    } else {
      setError('Invalid email, password, or role');
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
              Hospital Staff Login
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
              <TextField
                label="Role"
                name="role"
                select
                fullWidth
                margin="normal"
                value={credentials.role}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="nurse">Nurse</MenuItem>
              </TextField>
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
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AdminLogin;
