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
  Paper,
  TableContainer,
  Card,
  CardContent,
  Box,
  useTheme,
} from '@mui/material';

function MedicalReports() {
  const [reports, setReports] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    // Simulated API call to fetch reports
    const fetchReports = async () => {
      const data = [
        { id: 1, title: 'Blood Test Report', date: '2024-12-01', fileUrl: '/files/blood-test.pdf' },
        { id: 2, title: 'X-Ray Report', date: '2024-11-20', fileUrl: '/files/x-ray.pdf' },
        { id: 3, title: 'MRI Scan Report', date: '2024-11-15', fileUrl: '/files/mri-scan.pdf' },
      ];
      setReports(data);
    };
    fetchReports();
  }, []);

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
      <Container maxWidth="md">
        <Card elevation={6} sx={{ borderRadius: 4, background: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h4" fontWeight={700} gutterBottom align="center">
              Medical Reports
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ background: 'transparent' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Report Title</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.title}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          sx={{ mr: 1, fontWeight: 600 }}
                          onClick={() => window.open(report.fileUrl, '_blank')}
                        >
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          sx={{ fontWeight: 600 }}
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = report.fileUrl;
                            link.download = report.title;
                            link.click();
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default MedicalReports;
