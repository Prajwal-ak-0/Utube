import React from 'react'
import { useState, useEffect } from 'react'
import {Box , Typography} from '@mui/material';
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function SearchFeed() {

  const [videos, setvideos] = useState([])
  const {searchTerm} =useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
  },[searchTerm]);
  

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}}>
      <Typography variant="h4" fontWeight="bold"  sx={{color:"white"}} mb={2} ml={{ sm: "100px"}}>
        <span style={{ color: "#FC1503" }}>Search Results</span>
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
      
  )
}

export default SearchFeed
