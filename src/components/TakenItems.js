import React from 'react';
const App = (props) => {
  return (

    <div class='allitemsdiv'>
      <div id='date'> 
       {props.date}
      </div>
      <div id='comment' >
      {props.comment}
      </div>
      </div>         
  )
}

export default App;