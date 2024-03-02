import { useState, useEffect } from 'react';

import './App.css';
import CityApp from './CityApp';
import cits from './cities';
import SearchBox from './SearchBox';
import CurrLoc from './CurrLoc';

function App() {
  const [fc, setfc] = useState({});
  const [err,seterr]=useState(null);
  const [loc,setloc]=useState({})
  const [search,setsearch]=useState(false)
  
  const nowFilter = (VB) => {
    console.log(VB)
    const svb = VB
    const apiKey = 'b1a6285342f0ef405347eb7603ee78a1';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${svb}&appid=${apiKey}`)
    .then((res) => {
      if (!res.ok) {
        alert('Incorrect City!');
        return 0
      }
      return res.json();
    })
    .then((res) => {
      // Handle the successful response (status code 200)
      setfc(res);
    })

  };
  useEffect(()=>{
  const apiKey = 'b1a6285342f0ef405347eb7603ee78a1';
  const ct='Daharki'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=${apiKey}`)
    .then((res) => (res.json()))
    .then((res) => (
      // Handle the successful response (status code 200)
      setloc(res))
    )
  },[])
  
  return (
    <div className="container">
      <div className="left-component">
        {(Object.keys(loc).length !== 0) ? (
          <CurrLoc
            cty={loc["name"]}
            temp={parseInt(loc["main"]["temp"]) - 273}
            des={loc["weather"]["0"]["main"]}
            hum={loc["main"]["humidity"]}
            feel={parseInt(loc["main"]["feels_like"]) - 273}
            country={loc["sys"]["country"]}
            curdate={new Date()}
            
          />
        ) : (
          <></>
        )}
      </div>

      <div className="right-component">
      <h1 className="text-center text-black text-xl font-bold">WEATHER APP</h1>
      {!search?(
        <div className='flex display-flex text-white text-xl font-bold text-centre mt-4'>
        <h2 >Interested in searching city around the world?</h2>
        <button className="bg-white py-2 px-4 mb-2 rounded-lg ml-1 text-blue-500" onClick={(e)=>(setsearch(!search))}>Yes</button>
        <button className="bg-white py-2 px-4 mb-2 rounded-lg ml-1 text-blue-500" onClick={(e)=>(setsearch(search))}>No</button>
        </div>

      ):(
        <>
        <SearchBox news={nowFilter} />
        <div className="flex flex-wrap">
          {(Object.keys(fc).length !== 0) ? (
            <CityApp
              cty={fc["name"]}
              temp={parseInt(fc["main"]["temp"]) - 273}
              des={fc["weather"]["0"]["main"]}
              hum={fc["main"]["humidity"]}
              feel={parseInt(fc["main"]["feels_like"]) - 273}
              country={fc["sys"]["country"]}
            />
          ) : (
           <></>
          )}
        </div>
        </>

      )}
      
      </div>
    </div>
  );
}

export default App;