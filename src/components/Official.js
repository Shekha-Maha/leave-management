import React from 'react';
import calenderimg from '../calenderimg.svg'; 
const App = () => {
  return (

    <div class='official'>
      <div class ='text1'>
         <h1 id='officialtext' >Official Vacation</h1>
      </div>
      <div class='calender' >
         <img  src={calenderimg}/> 
      </div>                 
    </div>
    
  )
}

export default App;