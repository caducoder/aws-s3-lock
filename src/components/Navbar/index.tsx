import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthEventData } from '@aws-amplify/ui';

export default function Navbar({ signOut }: { signOut: ((data?: AuthEventData | undefined) => void) | undefined }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            File Vault
          </Typography>
          <Button color="inherit" onClick={signOut}>SignOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
