import { Box } from '@mui/material'
import React from 'react'
import { Projects } from './Projects'
import { Route, Routes } from 'react-router-dom'
import { Research } from './Research'
import { Other } from './Other'
import { Home } from './Home'
import { Contact } from './Contact'
import { Experience } from './Experience'

export const Right = () => {
  return (
    <Box sx={{
        flex:4,
        bgcolor:'#202123',
        height:'97vh',
       borderRadius:2,
        overflow:'auto',
        border:'1px solid #4c5052',
        
        
    }}>
        <Box sx={{
            // p:2,
            
        }}>
            <Routes>
                <Route path='/projects' element = {<Projects/>}></Route>
                <Route path='/research' element = {<Research/>}></Route>
                <Route path='/contact' element = {<Contact/>}></Route>
                <Route path='/other' element = {<Other/>}></Route>
                <Route path='/' element = {<Home/>}></Route>
                <Route path='/experience' element = {<Experience/>}></Route>
            </Routes>

        </Box>
        
    </Box>
  )
}
