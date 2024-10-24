import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import {Article, ContactMail, Home, LibraryBooks, Send, VideoLabel} from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

export const Left = () => {
  return (
    <Box sx={{
        flex:1,
        
        height:'73vh',
        borderRadius:2,
        overflow:'auto',
        bgcolor:'#1A1E28',
        color:'#EDEADE',
        boxShadow:5
        
    }}>
        <Box sx={{
            pt:4,
            pl:2
            
            
        }}>
        <MenuList sx={{
           
        }}>

        <MenuItem  component={Link} to="/" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
          
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/projects" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
           <VideoLabel/>
          </ListItemIcon>
          <ListItemText>Projects</ListItemText>
          
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/research" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
          <LibraryBooks/>
          </ListItemIcon>
          <ListItemText>Research</ListItemText>
          
        </MenuItem>
        <Divider />

        <MenuItem  component={Link} to="/experience" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Article/>
          </ListItemIcon>
          <ListItemText>Experience</ListItemText>
          
        </MenuItem>
        <Divider />
        <MenuItem  component={Link} to="/contact" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <ContactMail/>
          </ListItemIcon>
          <ListItemText>Contact </ListItemText>
          
        </MenuItem>
        <Divider />
        <MenuItem  component={Link} to="/other" activeClassName="active">
          <ListItemIcon sx={{color:'white'}}>
            <Send />
          </ListItemIcon>
          <ListItemText>Other</ListItemText>
          
        </MenuItem>

      </MenuList>

      </Box>
    </Box>
  )
}
