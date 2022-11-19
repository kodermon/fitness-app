import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/assets/icons/body-part.png'
import targetImage from '../assets/assets/icons/body-part.png'
import equipmentImage from '../assets/assets/icons/body-part.png'

const Details = ({ exerciseDetails }) => {
    const { gifUrl, bodyPart, name, equipment, target } = exerciseDetails

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: targetImage,
            name: target
        },
        {
            icon: equipmentImage,
            name: equipment
        }
    ]

    
  return (
    <Stack gap='60px' sx={{ flexDirection: {lg: 'row'}, alignItems: 'center', p: '20px'}} >
        <img src={gifUrl} alt={name} className='detail-image' loading='lazy'/>
        <Stack gap={{ lg: '35px', xs: '15px' }}>
            <Typography variant='h2' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h5'>
                Exercises keep you strong. <span style={{textTransform: 'capitalize'}}>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
            </Typography>
            {extraDetails.map((item) => (
                <Stack key={item.name} direction='row' gap='20px' alignItems='center'>
                    <Button>
                        <img src={item.icon} />
                    </Button>
                    <Typography variant='h5' textTransform='capitalize'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details