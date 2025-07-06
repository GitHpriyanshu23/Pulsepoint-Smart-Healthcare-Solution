import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 6 },
        textAlign: 'center',
        marginTop: 'auto',
        boxShadow: theme.palette.mode === 'dark' ? 6 : 0,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        &copy; 2024 PulsePoint. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        <a href="/terms" style={{ color: theme.palette.text.secondary, textDecoration: 'underline', marginRight: 8 }}>
          Terms & Conditions
        </a>
        |
        <a href="/privacy" style={{ color: theme.palette.text.secondary, textDecoration: 'underline', marginLeft: 8 }}>
          Privacy Policy
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
