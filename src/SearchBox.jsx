
import React, { useState ,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBox({news}) {
  const [c,setc]=useState([])
  const [val,setval]=useState("")
  useEffect(()=>{
      fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then(response => response.json())
      .then(data => {
    // Check if data and cities array exist
       if (data && data.data) {
      // Extract city names from the response
      const cityNames = data.data.reduce((acc, cityInfo) => {
        if (cityInfo.city) {
          acc.push(`${cityInfo.city},${cityInfo.country}`);
        }
        return acc;
      }, []);
      setc(cityNames)
    }
    }
    )
    
  },[])

  const srh=()=>{
    return(
    news(val)
    )
  }
  
  
  return (
    <div className='flex display-flex'>
    <Autocomplete
      className='bg-gray-200 mb-2'
      disablePortal
      id="combo-box-demo"
      options={c}
      sx={{ width: 600}}
      renderInput={(params) => <TextField {...params} label="City"  />}
      onChange={(event, newValue) => {
        // Update state with the selected option
        setval(newValue);
      }}
     
      
    />
    <button className="bg-white py-2 px-4 mb-2 rounded-lg ml-1 text-blue-500" onClick={srh}>Search</button>
    </div>

  );
}