import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Client } from '../src/Client/Client';

export default function PlayPage() {
  useRef(new Client());

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          SightReader
        </Typography>
      </Box>
    </Container>
  );
}
