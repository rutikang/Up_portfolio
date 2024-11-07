import { Delete, Send } from '@mui/icons-material'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import js from '../images/js.png'
import boot from '../images/bootstrap.png'
import react from '../images/react.svg'
import mui from '../images/mui.svg'
import html from '../images/file-type-css.svg'
import css from '../images/file-type-html.svg'


import node from '../images/node-js.svg'
import django from '../images/django.svg'
import mysql from '../images/sql-database-generic.svg'
import doc from '../images/docker.svg'
import kub from '../images/kubernetes.svg'
import postman from '../images/postman.png'


import grafana from '../images/grafana.svg'
import prom from '../images/prometheus.svg'

export const Home = () => {
  return (
    <Box>
        {/* <Box sx={{
        // border: '1px solid blue',
        
        width:"30%",
        height:'10vh',
        // bgcolor:'tomato',
        borderRadius:1,
        // boxShadow:10
    }}> */}
        <Card  sx={{
          width:'50%', 
          height:135, 
          bgcolor:'#1f3622',
           color:"#EDEADE", 
           m:3,
           border:'1px solid #4c5052',
           }}>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: '#E2DFD2', fontSize: 14 }}>
          DANIEL KASIGAZI RUTIKANGA
        </Typography>
        <Typography variant="h5" component="div">
          Software Engineer
        </Typography>
        <Typography sx={{ color: '#E2DFD2', mb: 1.5 }}> Cloud enthusiast | UI/UX | Researcher | Product manager | Full stack software developer</Typography>
        <Typography variant="body2" sx={{ color: 'white', fontSize: 15 }}>
          
          
        </Typography>
                    </CardContent>
                </Card>


    {/* </Box> */}
{/* --------------------------------skills-------------------------------------------------------------- */}
    <Box sx=
    {{ 
      bgcolor:'#212020',
      border:'1px solid #4c5052',
      width:'90%',
      ml:2,
      height:370,
      p:2,
      color:'gray',
      overflow:'auto'
      }}>
      {/* ------------- */}
           <Typography>Skills</Typography>
           <Divider sx={{bgcolor:'gray',mb:2}}/>
           <Typography sx={{mb:3}}>Frontend</Typography>
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
        <img src={html} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>HTML</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>

      <img src={css} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>CSS</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>

      <img src={js} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>JavaScript</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>

      <img src={boot} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>Bootstrap</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>

      <img src={react} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white',ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>React</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>

      <img src={mui} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>MUI</Typography>



    
    </Box>
      {/* ------------- */}

      <Typography sx={{mb:3, mt:3}}>Backend</Typography>
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
      
      <img src={node} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>Nodejs</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>

      <img src={django} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>
      <Typography sx={{color:'white'}}>Django</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>

      <img src={mysql} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>
      <Typography sx={{color:'white'}}>SQL</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>

      <img src={doc} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>
      <Typography sx={{color:'white'}}>Docker</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>


      <img src={kub} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>
      <Typography sx={{color:'white'}}>Kubernetes</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>


      <img src={postman} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>
      <Typography sx={{color:'white'}}>Postman</Typography>



    
    </Box>

    <Typography sx={{mb:3, mt:3}}>Monitoring</Typography>
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
      
      <img src={grafana} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>Grafana</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>

      <img src={prom} style={{ width: '40px', height: '40px' }}/>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1, mr:1}}/>
      <Typography sx={{color:'white'}}>Prometheus</Typography>
      <Divider orientation="vertical" variant="middle" flexItem  sx={{bgcolor:'white', ml:1,mr:1}}/>

   



    
    </Box>

    </Box>

    </Box>
  )
}
