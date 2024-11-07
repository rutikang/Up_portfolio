import { AppBar, Avatar, Box, Card, CardContent, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Top = () => {
  return (


    <Box sx={{mb:0.5, height:150}}> 
       
        
            <Toolbar sx=
            {{   
              // backgroundColor:'#ecfeff',
             height:150
             }}>


             <Box sx=
             {{
              bgcolor:"#082f49",
              height:150, width:150,
               display:'flex', 
               alignItems:'center', justifyContent:'center',
               borderRadius:2
               }}>
            <Avatar alt="Daniel" src="https://avatars.githubusercontent.com/u/117582332?" sx={{
                width:130, 
                height:130,
                boxShadow:5
                
                }}/>
                </Box>

               


            </Toolbar>
        
    </Box>
  )
}
