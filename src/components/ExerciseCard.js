import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{
                fontSize: '14px',
                color: '#fff',
                borderRadius: '20px',
                background: '#ffa9a9',
                ml: '21px',
                textTransform: 'capitalize'
            }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{
                fontSize: '14px',
                color: '#fff',
                borderRadius: '20px',
                background: '#fcc757',
                ml: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography
            color='#000'
            fontSize='22px'
            textTransform='capitalize'
            fontWeight='bold'
            ml='21px'
            mt='11px'
            pb='13px'
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard