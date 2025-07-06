import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Grid, Card, CardContent, Box, useTheme } from '@mui/material';
import axios from 'axios';

function BookOPD() {
  const [appointmentData, setAppointmentData] = useState({
    aadharNumber: '',
    name: '', 
    gender: '',
    age: '',
    mobile: '',
    hospital: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: '',
    criticalness: 'non-critical',
  });
  const theme = useTheme();

  const hospitals = ['City Hospital', 'Global Medical Center', 'Sunrise Clinic'];
  const departments = ['Cardiology', 'Neurology', 'Orthopedics'];
  const doctors = ['Priyanshu', 'Shreyansh', 'Aanchal'];

  const mockAadharData = {
    '503981419995': {
      name: 'Shreyansh Mahule',
      gender: 'Male',
      age: '19',
      mobile: '9109322676',
    },
    '987654321098': {
      name: 'Aanchal',
      gender: 'Female',
      age: '28',
      mobile: '8765432109',
    },
    '456789123456': {
      name: 'Pushkar',
      gender: 'Female',
      age: '40',
      mobile: '7654321098',
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const fetchPatientDetails = () => {
    const data = mockAadharData[appointmentData.aadharNumber];
    if (data) {
      setAppointmentData((prev) => ({
        ...prev,
        name: data.name || '',
        gender: data.gender || '',
        age: data.age || '',
        mobile: data.mobile || '',
      }));
      alert('Patient details fetched successfully!');
    } else {
      alert('No details found for the entered Aadhaar number.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/queue/', {
        ...appointmentData,
        arrival_time: new Date().toISOString(),
      });
      alert(`Appointment booked successfully and added to the queue!`);
      setAppointmentData({
        aadharNumber: '',
        name: '',
        gender: '',
        age: '',
        mobile: '',
        hospital: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        symptoms: '',
        criticalness: 'non-critical',
      });
    } catch (err) {
      console.error('Error booking appointment:', err);
      alert('Failed to book appointment. Please try again.');
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
        py: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={6} sx={{ borderRadius: 4, background: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
              Book an OPD Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Aadhaar Number */}
                <Grid item xs={12}>
                  <TextField
                    label="Aadhaar Number"
                    name="aadharNumber"
                    fullWidth
                    value={appointmentData.aadharNumber}
                    onChange={handleInputChange}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 1, fontWeight: 600 }}
                    onClick={fetchPatientDetails}
                  >
                    Fetch Details
                  </Button>
                </Grid>
                {/* Patient Name */}
                <Grid item xs={12}>
                  <TextField
                    label="Patient Name"
                    name="name"
                    fullWidth
                    value={appointmentData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                {/* Gender */}
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Gender"
                    name="gender"
                    fullWidth
                    value={appointmentData.gender}
                    onChange={(e) =>
                      setAppointmentData({ ...appointmentData, gender: e.target.value })
                    }
                    required
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                {/* Age */}
                <Grid item xs={12}>
                  <TextField
                    label="Age"
                    name="age"
                    type="number"
                    fullWidth
                    value={appointmentData.age}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                {/* Mobile Number */}
                <Grid item xs={12}>
                  <TextField
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    fullWidth
                    value={appointmentData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                {/* Hospital */}
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Select Hospital"
                    name="hospital"
                    fullWidth
                    value={appointmentData.hospital}
                    onChange={handleInputChange}
                    required
                  >
                    {hospitals.map((hospital) => (
                      <MenuItem key={hospital} value={hospital}>
                        {hospital}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* Department */}
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Department"
                    name="department"
                    fullWidth
                    value={appointmentData.department}
                    onChange={handleInputChange}
                    required
                  >
                    {departments.map((department) => (
                      <MenuItem key={department} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* Doctor */}
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Doctor"
                    name="doctor"
                    fullWidth
                    value={appointmentData.doctor}
                    onChange={handleInputChange}
                    required
                  >
                    {doctors.map((doctor) => (
                      <MenuItem key={doctor} value={doctor}>
                        {doctor}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Date"
                    name="date"
                    type="date"
                    fullWidth
                    value={appointmentData.date}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                {/* Time */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Time"
                    name="time"
                    type="time"
                    fullWidth
                    value={appointmentData.time}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                {/* Symptoms */}
                <Grid item xs={12}>
                  <TextField
                    label="Symptoms"
                    name="symptoms"
                    fullWidth
                    multiline
                    minRows={2}
                    value={appointmentData.symptoms}
                    onChange={handleInputChange}
                  />
                </Grid>
                {/* Criticalness */}
                <Grid item xs={12}>
                  <TextField
                    select
                    label="Criticalness"
                    name="criticalness"
                    fullWidth
                    value={appointmentData.criticalness}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="non-critical">Non-Critical</MenuItem>
                    <MenuItem value="critical">Critical</MenuItem>
                  </TextField>
                </Grid>
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ fontWeight: 600, fontSize: '1.1rem', py: 1.5 }}
                  >
                    Book Appointment
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default BookOPD;
