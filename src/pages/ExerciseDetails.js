import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
      setExerciseDetails(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
    }

    fetchExercisesData()
  }, [id])


  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails






















// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Box } from '@mui/material'

// //import { fetchData, exerciseOptions } from '../utils'
// import Details from '../components/Details'
// import ExerciseVideos from '../components/ExerciseVideos'
// import SimilarExercises from '../components/SimilarExercises'

// const ExerciseDetails = () => {
//     // const [exerciseDetails, setExerciseDetails] = useState({})
//     // const { id } = useParams()

//     // useEffect(() => {
//     //     const fetchExercisesData = async () => {
//     //         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';

//     //         const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exerciseOptions);
//     //         setExerciseDetails(exerciseDetailData)
//     //     }

//     //     fetchExercisesData()
//     // }, [])


//   return (
//     <Box>
//         <Details />
//         <ExerciseVideos />
//         <SimilarExercises />
//     </Box>
//   )
// }

// export default ExerciseDetails