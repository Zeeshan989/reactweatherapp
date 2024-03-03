// CityApp.jsx
import React, { useState,useEffect } from 'react';

function CurrLoc({ cty, temp,des,hum,feel,country}) {
  const [tim,settm]=useState('')
  const [dt,setdt]=useState('')
    const backgroundStyle = {
        backgroundImage: `url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

  
      const updateClock=()=>{
        const now = new Date();
        const monthNames = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
        
        // Get current month as a string
        const currentMonthString = monthNames[now.getMonth()];
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        // Get current day of the month
        const currentDay = now.getDate().toString().padStart(2, '0');
        // Get current year
        const currentYear = now.getFullYear().toString();
        // Combine them into a formatted date string
        const formattedDate = `${currentMonthString} ${currentDay},${currentYear}`;
        setdt(formattedDate)
        

        
        settm(timeString)

       
        
      }
      useEffect(() => {
        setInterval(updateClock, 1000);
      }, []);

     
        
     






 
  return (
    <div className="h-300 w-100 max-w-sm mx-2 overflow-hidden shadow-lg p-3 rounded-lg" style={backgroundStyle}>
        <h1 className="font-bold text-centre text-xl py-20 mb-2 px-20 text-black">Current Location</h1>
      <div className="px-6 py-20" >
        {(temp<20)?(<img
        src="https://cdn-icons-png.freepik.com/512/6805/6805180.png"
        alt="Description of the image"
        style={{ width: '300px', height: '200px' }}
      />):( <img
        src="https://cdn-icons-png.freepik.com/512/6805/6805171.png"
        alt="Description of the image"
        style={{ width: '300px', height: '200px' }}
      />  )}
        <div className="font-bold text-xl mb-2 text-white">{cty},{country}</div>
        <p className="text-l text-white text-base ">Temperature:   {temp} ℃</p>
        <p className="text-l text-white text-base ">Condition: {des}</p>
        <p className="text-l text-white text-base ">Humidity:  {hum}</p>
        <p className="text-l text-white text-base ">Feels Like:    {feel} ℃</p>
        <p className="text-l pl-20 font-bold text-right text-red-500 text-base">{tim}</p>
        <p className="text-l pl-20 font-bold text-right text-blue-500 text-base">{dt}</p>
        
        


      </div>
    </div>
  );
}
/*{curdate.getFullYear()}/{curdate.getMonth()+1}/{curdate.getDate()}*/
/*{curdate.getHours()}:{curdate.getMinutes()}:{curdate.getSeconds()}*/

export default CurrLoc;