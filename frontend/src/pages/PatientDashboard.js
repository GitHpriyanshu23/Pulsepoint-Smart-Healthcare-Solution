import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { EventNote, Hotel, LocalHospital, Description, Payment } from '@mui/icons-material';

function PatientDashboard() {
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
        pb: 6,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: 'none',
          color: theme.palette.text.primary,
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Welcome to PulsePoint Patient Dashboard
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, color: theme.palette.text.secondary }}
        >
          Access all your healthcare services from one place.
        </Typography>
      </Box>

      {/* Main Dashboard Features */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Book Appointment */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.04)', boxShadow: 12 },
                background: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <EventNote style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Book an Appointment
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Schedule an appointment with a doctor for OPD services.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/book-opd')}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reserve Bed */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.04)', boxShadow: 12 },
                background: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Hotel style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Reserve a Bed
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Book a hospital bed in advance for inpatient care.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/reserve-bed')}
                >
                  Reserve Bed
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Emergency Connect */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.04)', boxShadow: 12 },
                background: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <LocalHospital style={{ fontSize: 60, color: '#ff1744' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Emergency Connect
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Call an ambulance to your location immediately.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600, backgroundColor: '#ff1744', '&:hover': { backgroundColor: '#d50000' } }}
                  onClick={() => (window.location.href = '/emergency.html')}
                >
                  Emergency Connect
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Medical Reports */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.04)', boxShadow: 12 },
                background: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Description style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Medical Reports
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  View and download your medical reports with ease.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/medical-reports')}
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Payment Gateway */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={6}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.04)', boxShadow: 12 },
                background: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Payment style={{ fontSize: 60, color: '#4caf50' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Payment Gateway
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Pay your hospital bills securely online.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' } }}
                  onClick={() => window.open('https://www.onlinesbi.sbi/', '_blank')}
                >
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PatientDashboard;