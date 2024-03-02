
import React, { useState } from 'react';

function SearchBox({news}) {
  const [val,setval]=useState('')
  const srh=()=>(
     news(val)
  )

  return (
    <>
    <div className='flex display-flex'>
    <input
        className="bg-gray-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Enter City"
        onChange={(e)=>{
          setval(e.target.value)
        }}
        />
        <button className="bg-white py-2 px-4 mb-2 rounded-lg ml-1 text-blue-500" onClick={srh}>Search</button>
        </div>
    </>
  );
}

export default SearchBox;
