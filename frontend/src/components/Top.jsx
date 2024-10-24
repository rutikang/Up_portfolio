import { AppBar, Avatar, Box, Card, CardContent, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Top = () => {
  return (


    <Box sx={{mb:0.5, height:150}}> 
        <AppBar sx={{bgcolor:'white'}}>
            <Toolbar sx=
            {{backgroundColor:'#1A1E28',
             height:150
             }}>



            <Avatar alt="Daniel" src="https://avatars.githubusercontent.com/u/117582332?" sx={{
                width:140, 
                height:140,
                boxShadow:5
                
                }}/>

                <Card  sx={{minWidth:300, ml:3, height:145, bgcolor:'#423930', color:"#EDEADE"}}>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: '#E2DFD2', fontSize: 14 }}>
          DANIEL KASIGAZI RUTIKANGA
        </Typography>
        <Typography variant="h5" component="div">
          Software Engineer
        </Typography>
        <Typography sx={{ color: '#E2DFD2', mb: 1.5 }}>He/Him</Typography>
        <Typography variant="body2" sx={{ color: 'white', fontSize: 13 }}>
          
          Hi 🙋‍♂️ , I am interested in technology
        </Typography>
                    </CardContent>
                </Card>


            </Toolbar>
        </AppBar>
    </Box>
  )
}
