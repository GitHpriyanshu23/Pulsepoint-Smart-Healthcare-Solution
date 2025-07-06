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
  Box,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    // Simulated data fetch (replace with API call)
    const fetchInventory = async () => {
      const data = [
        { id: 1, name: 'Paracetamol', quantity: 50 },
        { id: 2, name: 'Ibuprofen', quantity: 30 },
        { id: 3, name: 'Amoxicillin', quantity: 20 },
      ];
      setInventory(data);
    };
    fetchInventory();
  }, []);

  const handleRestock = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 10 } : item
      )
    );
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
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} gutterBottom align="center">
          Inventory Management
        </Typography>
        <Card elevation={6} sx={{ borderRadius: 4, background: theme.palette.background.paper }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Medicine ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleRestock(item.id)}
                        sx={{ fontWeight: 600 }}
                      >
                        Restock
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default InventoryManagement;
