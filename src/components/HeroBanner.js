import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import Herobanner from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px' }
    }} position='relative' px='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' }}} mb='23px' mt='30px' >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='33px' mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button 
        variant='contained'
        color='error'
        sx={{ backgroundColor: '#fff2625', padding: '10px 15px'}}  
      >Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color='#ff2625'
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
      >
        Exercises
      </Typography>
      <img src={Herobanner} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner