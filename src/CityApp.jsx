// CityApp.jsx
import React from 'react';

function CityApp({ cty, temp,des,hum,feel,country}) {
    const backgroundStyle = {
        backgroundImage: `url('https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <div className="max-w-sm mx-2 overflow-hidden shadow-lg p-3 rounded-lg" style={backgroundStyle}>
      
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
  );
}

export default CityApp;
