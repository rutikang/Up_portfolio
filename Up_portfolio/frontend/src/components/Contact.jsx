import { Box, Card, CardContent, Divider, Typography } from '@mui/material'

import linkn from '../images/gmail.png'
import gmail from '../images/likn.png'
import github from '../images/github.png'


import React from 'react'

export const Contact = () => {
  return (
    <Box>
        <Box sx={{
        // border: '1px solid blue',
        width:"80%",
        p:4,
        color:'white', 
        
    }}>

<Typography sx={{color:'gray'}}>Contact me</Typography>
           <Divider sx={{bgcolor:'gray',mb:10}}/>
           {/* <Typography sx={{mb:3}}>Contact Me</Typography> */}
      <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
      }}
    >
      <a href="https://github.com/rutikang" target="_blank" rel="noopener noreferrer">

        <img src={github} style={{ width: '80px', height: '80px' }} />
        </a>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gra', ml:5,mr:2}}/>
      <Typography sx={{color:'white'}}>Github</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gray', ml:5, mr:5}}/>

      <a href="https://www.linkedin.com/in/daniel-rutikanga-kasigazi-02a2aa173/" target="_blank" rel="noopener noreferrer">

      <img src={gmail} style={{ width: '80px', height: '80px' }}/>
      </a>

      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gra', ml:5,mr:2}}/>
      <Typography sx={{color:'white'}}>Linkedin</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gray', ml:5,mr:5}}/>
      <a href="mailto:danielrutikanga31@gmail.com" target="_blank" rel="noopener noreferrer">

      <img src={linkn} style={{ width: '80px', height: '80px' }}/>
      </a>

      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'gra', ml:5,mr:2}}/>
      <Typography sx={{color:'white'}}>Gmail</Typography>

      
    
    </Box>

    </Box>
    </Box>
  )
}
