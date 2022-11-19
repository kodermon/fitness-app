import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    // console.log(exerciseVideos)
    if(!exerciseVideos.length) return 'Loading...'

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '30px' }}} p='20px'>
        <Typography variant='h4' mb='18px'>
            Watch <span style={{ color: 'red', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
            sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '60px', xs: '15px'}
            }}
        >
            {exerciseVideos?.slice(0, 6).map((item, index) => (
                <a
                    key={index}
                    className='exercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant='h5' color='black'>
                            {item.video.title}
                        </Typography>
                        <Typography variant='h6' color='blue'>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos