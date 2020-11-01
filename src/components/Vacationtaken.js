import React from 'react';
import Takenitems from './TakenItems';
const App = () => {
  return (

    <div class='vacationtaken'>
        <div id='text2'>
          LIST OF VACATION TAKEN
        </div>
        <div class='allitems'>
           <Takenitems
           date='09/02/2020'
           comment='I am not feeling well today '
           /> 
        </div>
        <div class='allitems'>
           <Takenitems
           date='09/02/2020'
           comment='I am not feeling well today '
           /> 
        </div>
        <div class='allitems'>
           <Takenitems
           date='09/02/2020'
           comment='I am not feeling well today '
           /> 
        </div>
        <div class='allitems'>
           <Takenitems
           date='09/02/2020'
           comment='I am not feeling well today '
           /> 
        </div>
        <div class='allitems'>
           <Takenitems
           date='09/02/2020'
           comment='I am not feeling well today '
           /> 
        </div>
              
    </div>
  )
}

export default App;