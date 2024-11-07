import React from 'react'
import { Launch } from '@mui/icons-material';
import { Box, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
export const Research = () => {
  const itemData = [
    {
      img: 'https://grafana.com/media/products/cloud/grafana/grafana-dashboard-english.png?w=900',
      title: 'Anomaly detector',
      author: 'Platform monitoring',
       link: 'https://github.com/rutikang/Anomaly-detector/blob/main/Efficient%20Data%20Stream%20Anomaly%20Detection.pdf'
    },
   
  
];


return (
<Box sx={{
    width:"100%",
    height:'95vh'   
}}>
    <Box sx={{
        p:4,
        color:'gray',
        overflowX:'hidden'
        
    }}>
    <Typography>Research</Typography>
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
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.94)' }}
            aria-label={`info about ${item.title}`}
          >
            <Launch />
          </IconButton>
          </a>
        }
      />
    
    </ImageListItem>
  ))}
</ImageList>

    </Box>
</Box>
)
}
