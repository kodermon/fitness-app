import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, TextField, Button} from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ bodyPart, setBodyPart, setExercises  }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
      );

      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: {lg: '44px', xs:'30px'}}}
        mb='50px'
        textAlign= 'center'
      >
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
            },
          width: {
            lg: '800px',
            xs: '350px'
          },
          borderRadius: '40px',
          backgroundColor: '#fff'
          }}
          type='text'
          value={search}
          onChange= {(e) => setSearch(e.target.value.toLocaleLowerCase())}
          height = '56px'
          placeholder="Search Exercises"
        />
        <Button className='search-btn'
          sx={{
            width: { lg: '172px', xs: '70px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            bgcolor: '#ff2625',
            textTransform: 'none',
            color: '#fff',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ width: '100%', position: 'relative', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises