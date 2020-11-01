import React from 'react';

const App = () => {
  return (

    <div class="leave">
      <div class="leaveday">
        <h1 class="centerbold">Leave Day</h1>
      </div>

      <div class="circle large">
      <div class="item css">
          <span class="title">5 <span class="subtitle"> days left</span></span>
          <svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <circle class="circle_animation"  r="150.85699" cy="180" cx="180" stroke-width="16" stroke="#FEC007" fill="none"/>
          </g>
          </svg>
      </div>
      </div>
      <div class="circle mid">
      <div class="item css">
          <span class="title">5 <span class="subtitle"> days left</span></span>
          <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <circle class="circle_animation"  r="90.85699" cy="120" cx="120" stroke-width="10" stroke="#FEC007" fill="none"/>
          </g>
          </svg>
      </div>
      </div>
      <div class="circle small">
      <div class="item css">
          <span class="title">5 <span class="subtitle"> days left</span></span>
          <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <circle class="circle_animation"  r="90.85699" cy="120" cx="120" stroke-width="8" stroke="#FEC007" fill="none"/>
          </g>
          </svg>
      </div>
      </div>
      <div class='left' >
        <h1>You Currently Have 5 Days of Vacation left</h1>
    </div>
    </div>
  )
}

export default App;