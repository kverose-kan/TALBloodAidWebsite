import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MapAppBar from '@/components/MapAppBar';
import LeftNavPane, { drawerWidth } from '@/components/LeftNavPane';
import { Typography } from '@mui/material';
import TopRightButtons from '@/components/TopRightButtons';


export default function Home() {
  return (
    <Container maxWidth="lg">
      
      <Box mb={2}>
        <MapAppBar />
        <TopRightButtons />
      </Box>
      
      <Box display="flex">
        
        <LeftNavPane />
        <Box flexGrow={1} ml={`${drawerWidth}px`} p={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Main Content Area
          </Typography>
          <Typography variant="body1">
            This is where your main content will go.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
