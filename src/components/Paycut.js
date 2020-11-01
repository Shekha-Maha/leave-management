import React from 'react';
import Twoitems from './Twoitems.js';
const App = () => {
  return (

    <div class='paycut'>

        <div id='text3'>
         PAYSLIP FOR THE MONTH OF 2019
        </div>

        <div class='payslip'>
            <h1 id='paycode'>PAYSLIP #49029</h1>
            <h2 id='paymonth'>Salary month: March, 2019</h2>
        </div>

        <div class='address'>
           <h1> Dreamguy Technologies</h1>
           <h1>3864 Quiet Vaalley Lane,</h1>  
           <h1>Shreman Oaks, CA,91403</h1>
           <h2 id='naming'>Jone Doe</h2> 
           <h1>Web Desginer</h1>
           <h1>Employee ID:ft-0009</h1>
           <h1>joimimg Date: 1Jan 2013</h1>
        </div>

        <div class='Twoitems'>
        <Twoitems/>
        </div>
         
        <div>
            <div>
            <h1 id='netsalary'><i class='bold'>Net Salary: $59689</i>
            (Fifty nine thousand six hundred and ninety eight only)</h1>
            </div>
        </div>
     </div>
  )
}

export default App;