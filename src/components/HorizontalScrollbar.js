import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import Leftarrow from '../assets/assets/icons/left-arrow.png'
import Rightarrow from '../assets/assets/icons/right-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow' >
            <img src={Leftarrow} alt='Left Arrow' />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Typography onClick={() => scrollNext()} className='left-arrow' >
            <img src={Rightarrow} alt='left-arrow' />
        </Typography>
    )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data.map((item) => (
                    <Box
                        key={ item.id || item }
                        //itemId={ item.id || item }
                        title={ item.id || item }
                        margin= '0 40px'
                    >
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item} />}
                    </Box>
                )
            )
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar