import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Stack } from '@mui/material'

const Loader = () => {
  return (
    <Stack>
        <InfinitySpin color='gray' />
    </Stack>
  )
}

export default Loader