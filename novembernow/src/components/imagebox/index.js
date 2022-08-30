import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <div className="boxLinks">
    <Box
      sx={{
        width: 280,
        height: 280,
        backgroundImage: 'url(https://i.imgur.com/fSxu1q8.png)',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.8, 0.7, 0.6],
        },
      }}
    />
    <Box
      sx={{
        width: 280,
        height: 280,
        backgroundImage: 'url(https://i.imgur.com/Myiyglj.png)',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.8, 0.7, 0.6],
        },
      }}
    />
    <Box
      sx={{
        width: 280,
        height: 280,
        backgroundImage: 'url(https://i.imgur.com/xeDIhNy.png)',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.8, 0.7, 0.6],
        },
      }}
    />
    <Box
      sx={{
        width: 280,
        height: 280,
        backgroundImage: 'url(https://i.imgur.com/CJzmKtn.png)',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.8, 0.7, 0.6],
        },
      }}
    ></Box>
    </div>
  );
}