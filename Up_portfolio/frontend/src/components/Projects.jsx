import { Launch } from '@mui/icons-material';
import { Box, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'

export const Projects = () => {

    const itemData = [
        {
          img: 'https://grafana.com/media/products/cloud/grafana/grafana-dashboard-english.png?w=900',
          title: 'Friendly',
          author: 'Social media platform',
        //   rows: 1,
        //   cols: 3,
        //   featured: true,
        },
        {
          img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
          title: 'Anomaly detector',
          author: 'Platform monitoring',
        },
        {
          img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
          title: 'Simple React apps',
          author: 'Simple apps created with react',
        },
        {
          img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
          title: 'Anomaly detector',
          author: 'Platform monitoring',
        },
        {
          img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
          title: 'Simple React apps',
          author: 'Simple apps created with react',
        },
        {
          img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
          title: 'Anomaly detector',
          author: 'Platform monitoring',
        },
        {
          img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
          title: 'Simple React apps',
          author: 'Simple apps created with react',
        },
        {
          img: 'https://i.pinimg.com/1200x/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.jpg',
          title: 'Anomaly detector',
          author: 'Platform monitoring',
        },
        {
          img: 'https://i.pinimg.com/1200x/0e/85/f0/0e85f08884f68a1e515366cc45a9c92e.jpg',
          title: 'Simple React apps',
          author: 'Simple apps created with react',
        },
    //    https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        
    ];


  return (
    <Box sx={{
        // border: '1px solid gray',
        width:"100%",
        height:'95vh',
        // bgcolor:'#f0f9ff',
        // borderRadius:2,
        // overflowY: 'auto',
       
        
        
        
    }}>
        <Box sx={{
            p:4,
            color:'gray',
            overflowX:'hidden'
            
        }}>
        <Typography>Projects</Typography>
        <Divider sx={{bgcolor:'gray'}}/>

{/* ------------------------------------------------------------------- */}
        
    <ImageList sx={{ width:"100%", height:'auto', gap:1}}>
      <ImageListItem key="Subheader" cols={3} sx={{mt:5}} >
        
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}` }
            alt={item.title}
            loading="lazy"
            style={{
                width:"320px",
                height:"300px",
                borderRadius:5,
                boxShadow:5,

            }}
            
          />
                    <ImageListItemBar
            sx={{bgcolor: 'rgba(8 ,47, 73 ,0.8 )',width:"320px", boxShadow:10 }}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Launch />
              </IconButton>
              
            }
          />
        
        </ImageListItem>
      ))}
    </ImageList>

        </Box>
    </Box>
  )
}
