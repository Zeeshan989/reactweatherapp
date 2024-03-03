// CityApp.jsx
import React from 'react';

function CityApp({ cty, temp,des,hum,feel,country,k,curd}) {
  console.log(curd)
    const backgroundStyle = {
        backgroundImage: `url('https://images.pexels.com/photos/1327329/pexels-photo-1327329.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2')`, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    const st2={
      backgroundImage: `url('https://images.pexels.com/photos/1327329/pexels-photo-1327329.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2')`, // Replace with your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    
    };
  return (
    <>
    {(k===0)?(
    <div className={"max-w-full mb-2 mx-2 overflow-hidden shadow-lg p-3 rounded-lg"} style={backgroundStyle}>
      <div className="font-bold text-xl mb-2 text-blue-700">{curd}</div>
      <div className="px-6 py-4" >
        {(temp<20)?(<img
        src="https://cdn-icons-png.freepik.com/512/6805/6805180.png"
        alt="Description of the image"
        style={{ width: '150px', height: '100px' }}
      />):( <img
        src="https://cdn-icons-png.freepik.com/512/6805/6805171.png"
        alt="Description of the image"
        style={{ width: '150px', height: '100px' }}
      />  )}
        <div className="font-bold text-xl mb-2 text-white">{cty},{country}</div>
        <p className="text-white text-base ">Temperature:   {temp} ℃</p>
        <p className="text-white text-base ">Condition: {des}</p>
        <p className="text-white text-base ">Humidity:  {hum}</p>
        <p className="text-white text-base ">Feels Like:    {feel} ℃</p>
        
        </div>
        </div>
       ):(
        <div className={"max-w-xs mx-auto overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg"} style={st2} >
         <div className="font-bold text-xl mb-2 text-blue-300">{curd}</div>
         <div className="px-6 py-4" >
        {(temp<20)?(<img
        src="https://cdn-icons-png.freepik.com/512/6805/6805180.png"
        alt="Description of the image"
        style={{ width: '50px', height: '25px' }}
      />):( <img
        src="https://cdn-icons-png.freepik.com/512/6805/6805171.png"
        alt="Description of the image"
        style={{ width: '50px', height: '25px' }}
      />  )}
        <p className="text-white text-base ">Temperature:   {temp} ℃</p>
        <p className="text-white text-base ">Condition: {des}</p>
       
        </div>
        </div>
       )}
    </>
  );
}

export default CityApp;
