import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Appbar1 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    
          <Typography variant="h3" component="div" sx={{ flexGrow: 2 }} color='black'> 
          THE BOOK STORE 
          </Typography>
         
        <Typography variant="h1" component="div" >
             <Button variant='contained' color="inherit" > <Link to='/'> view</Link></Button></Typography> 
            <Typography variant="h1" component="div" ><Button variant='contained' color="inherit" > <Link to='/add'> add</Link></Button>
            </Typography>  </Toolbar>
      
      </AppBar>
    </Box>
  );
}
  
export default Appbar1
