import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CircularProgress,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Paper,
  Box,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';
import axios from 'axios';

function BedManagement() {
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBed, setNewBed] = useState({ bed_id: '', type: '', is_available: true });
  const theme = useTheme();

  // Fetch beds from API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/beds/')
      .then((response) => {
        setBeds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching beds:', error);
        setLoading(false);
      });
  }, []);

  // Add a new bed
  const handleAddBed = () => {
    if (!newBed.bed_id || !newBed.type) {
      alert('Please fill in all fields for the new bed.');
      return;
    }
    axios
      .post('http://127.0.0.1:8000/api/beds/', newBed)
      .then((response) => {
        setBeds([...beds, response.data]);
        setNewBed({ bed_id: '', type: '', is_available: true });
        alert('Bed added successfully!');
      })
      .catch((error) => {
        console.error('Error adding bed:', error);
        alert('Failed to add bed. Please try again.');
      });
  };

  // Toggle bed availability
  const toggleAvailability = (bedId) => {
    axios
      .patch(`http://127.0.0.1:8000/api/beds/${bedId}/`, { is_available: false })
      .then((response) => {
        const updatedBeds = beds.map((bed) =>
          bed.bed_id === bedId ? { ...bed, is_available: !bed.is_available } : bed
        );
        setBeds(updatedBeds);
      })
      .catch((error) => {
        console.error('Error updating bed availability:', error);
        alert('Failed to update bed availability.');
      });
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}><CircularProgress /></Box>;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
          : 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Bed Management
        </Typography>

        {/* Add New Bed */}
        <Card elevation={6} sx={{ mb: 4, borderRadius: 4, background: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Add New Bed
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField
                label="Bed ID"
                value={newBed.bed_id}
                onChange={(e) => setNewBed({ ...newBed, bed_id: e.target.value })}
                sx={{ minWidth: 120 }}
              />
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={newBed.type}
                  onChange={(e) => setNewBed({ ...newBed, type: e.target.value })}
                  label="Type"
                >
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="icu">ICU</MenuItem>
                  <MenuItem value="special">Special</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" onClick={handleAddBed} sx={{ fontWeight: 600 }}>
                Add Bed
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Display Beds */}
        <Paper elevation={4} sx={{ borderRadius: 4, background: theme.palette.background.paper }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Bed ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Availability</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {beds.map((bed) => (
                <TableRow key={bed.bed_id}>
                  <TableCell>{bed.bed_id}</TableCell>
                  <TableCell>{bed.type}</TableCell>
                  <TableCell>{bed.is_available ? 'Available' : 'Occupied'}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={bed.is_available ? 'success' : 'error'}
                      onClick={() => toggleAvailability(bed.bed_id)}
                      sx={{ fontWeight: 600 }}
                    >
                      {bed.is_available ? 'Mark as Occupied' : 'Mark as Available'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
}

export default BedManagement;
