import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

import Icon from '../assets/assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        alignItems='center'
        justifyContent='center'
        type='button'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            width: '270px',
            height: '280px',
            background: '#fff',
            cursor: 'pointer',
            gap: '47px'
        }}
        onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            }
        }
    >
        <img src={Icon} alt='dumbell' style={{width: '40px'}} />
        <Typography fontSize='24px' fontWeight='500' textTransform='capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart