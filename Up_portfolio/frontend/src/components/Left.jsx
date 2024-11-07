import { Avatar, Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Stack } from '@mui/material'
import {Article, ContactMail, Home, LibraryBooks, Send, VideoLabel} from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

export const Left = () => {
  return (
  <Stack sx={{display:'flex', 
    alignItems:'center', justifyContent:'center',
    height:'90vh'
    }}>
    <Box sx=
             {{
              bgcolor:"#212020",
              height:150, width:150,
               display:'flex', 
               alignItems:'center', justifyContent:'center',
               border:'1px solid #4c5052',

               borderRadius:1
               }}>
            <Avatar alt="Daniel" src="https://avatars.githubusercontent.com/u/117582332?" sx={{
                width:130, 
                height:130,
                boxShadow:10
                
                }}/>
                </Box>
    
    <Box sx={{
        flex:1,
        
        height:'80vh',
        borderRadius:2,
        // overflow:'auto',
        bgcolor:'#212020',
        color:'#EDEADE',
        border:'1px solid #4c5052',
        boxShadow:1,
        width:220,
        mt:2
        
    }}>
      
        <Box sx={{
            pt:4,
            pl:2
            
            
        }}>
        <MenuList sx={{
           
        }}>
         {/* <Divider /> */}

        <MenuItem  component={Link} to="/" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
                  <Divider sx={{ bgcolor: '#4c5052' }}/>

        </MenuItem>
        <Divider sx={{ bgcolor: '#4c5052' }}/>
        <MenuItem component={Link} to="/projects" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
           <VideoLabel/>
          </ListItemIcon>
          <ListItemText>Projects</ListItemText>
          
        </MenuItem>
        <Divider sx={{ bgcolor: '#4c5052' }}/>
        <MenuItem component={Link} to="/research" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
          <LibraryBooks/>
          </ListItemIcon>
          <ListItemText>Research</ListItemText>
          
        </MenuItem>
        {/* <Divider sx={{ bgcolor: '#4c5052' }}/>

        <MenuItem  component={Link} to="/experience" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Article/>
          </ListItemIcon>
          <ListItemText>Experience</ListItemText>
          
        </MenuItem> */}
        <Divider sx={{ bgcolor: '#4c5052' }}/>
        <MenuItem  component={Link} to="/contact" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <ContactMail/>
          </ListItemIcon>
          <ListItemText>Contact </ListItemText>
          
        </MenuItem>
        <Divider sx={{ bgcolor: '#4c5052' }}/>
        {/* <MenuItem  component={Link} to="/other" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Send />
          </ListItemIcon>
          <ListItemText>Other</ListItemText>
          
        </MenuItem>
        <Divider sx={{ bgcolor: '#4c5052' }}/> */}
      </MenuList>

      </Box>
    </Box>
    </Stack>
  )
}
