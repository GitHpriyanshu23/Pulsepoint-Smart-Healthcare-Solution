import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, Grid, useTheme, Stack } from '@mui/material';

function WasteManagementSystem() {
  const [wasteCounters, setWasteCounters] = useState({
    regular: {
      dressings: 0,
      napkins: 0,
      gloves: 0,
    },
    biohazardous: {
      blood_tubing: 0,
      bloody_dressing: 0,
      infectious_materials: 0,
    },
    sharps: {
      syringes: 0,
      needles: 0,
      blades: 0,
    },
    pharmaceutical: {
      vials: 0,
      expired_medicine: 0,
      cytotoxic: 0,
    },
  });
  const theme = useTheme();

  const handleIncrease = (category, item) => {
    setWasteCounters((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: prevState[category][item] + 1,
      },
    }));
  };

  const handleDecrease = (category, item) => {
    setWasteCounters((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: Math.max(prevState[category][item] - 1, 0),
      },
    }));
  };

  const disposeAllWaste = () => {
    alert("All waste from all categories has been disposed to the municipal system.");
    setWasteCounters({
      regular: { dressings: 0, napkins: 0, gloves: 0 },
      biohazardous: { blood_tubing: 0, bloody_dressing: 0, infectious_materials: 0 },
      sharps: { syringes: 0, needles: 0, blades: 0 },
      pharmaceutical: { vials: 0, expired_medicine: 0, cytotoxic: 0 },
    });
  };

  const displayDisposedWaste = () => {
    const disposedWaste = Object.entries(wasteCounters)
      .map(([category, items]) =>
        Object.entries(items)
          .map(([item, count]) => `${item.replace(/_/g, " ")}: ${count}`)
          .join("\n")
      )
      .join("\n\n");
    alert(`Waste disposed so far:\n\n${disposedWaste}`);
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
        fontFamily: 'Poppins, Arial, sans-serif',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Waste Management System
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {Object.entries(wasteCounters).map(([category, items]) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Card elevation={6} sx={{ borderRadius: 4, background: theme.palette.background.paper }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom textAlign="center">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Waste
                  </Typography>
                  <Stack spacing={2}>
                    {Object.keys(items).map((item) => (
                      <Box key={item} display="flex" alignItems="center" justifyContent="space-between">
                        <Typography sx={{ textTransform: 'capitalize' }}>{item.replace(/_/g, ' ')}:</Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Button variant="outlined" size="small" onClick={() => handleDecrease(category, item)}>-</Button>
                          <Typography>{items[item]}</Typography>
                          <Button variant="outlined" size="small" onClick={() => handleIncrease(category, item)}>+</Button>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ fontWeight: 600, mr: 2, px: 4, py: 1.5 }}
            onClick={disposeAllWaste}
          >
            Dispose All Waste to Municipal
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ fontWeight: 600, px: 4, py: 1.5 }}
            onClick={displayDisposedWaste}
          >
            View Disposed Waste Data
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default WasteManagementSystem;
