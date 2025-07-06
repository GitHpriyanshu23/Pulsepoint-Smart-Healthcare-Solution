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
import { People, Hotel, Inventory2, Description, Delete, Build } from '@mui/icons-material';

function AdminDashboard() {
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
          Welcome to PulsePoint Admin Dashboard
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 2, color: theme.palette.text.secondary }}
        >
          Manage all hospital operations from one place.
        </Typography>
      </Box>

      {/* Main Dashboard Features */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Manage OPD Queue */}
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
                <People style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Manage OPD Queue
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Monitor and manage OPD queues efficiently.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/opd-queue')}
                >
                  Go to OPD Queue
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Bed Management */}
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
                  Bed Management
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Track and manage hospital bed availability.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/bed-management')}
                >
                  Manage Beds
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Inventory Management */}
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
                <Inventory2 style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Inventory Management
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Monitor and manage hospital medicine stock.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => {
                    window.location.href = 'http://127.0.0.1:8000/admin/inventory/';
                  }}
                >
                  Manage Inventory
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reservation History */}
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
                  Reservation History
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  View details of all past bed reservations.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/reservation-history')}
                >
                  View History
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Waste Management */}
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
                <Delete style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Waste Management
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Manage and track hospital waste disposal.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/waste-management')}
                >
                  Waste Management
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Hospital Integration */}
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
                <Build style={{ fontSize: 60, color: theme.palette.secondary.main }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Hospital Integration
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  Integrate external hospital systems and manage data exchanges.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate('/hospital-integration')}
                >
                  Integrate Hospital Systems
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdminDashboard;