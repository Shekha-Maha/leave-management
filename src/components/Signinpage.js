import React from 'react';
import fullname from '../fullname.svg';
import email from '../email.svg';
import phone from '../phone.svg';
import password from '../password.svg';
import bigcover from '../bigcover.svg';
const App = () => {
  return (
   
  <div class='main-signup'>
     
   <form >
   
  <div class="signUpBack">

  <div class="input-container">
  <img class='icons' src={email} />
    <input class="input-field" type="text" placeholder="Email" name="email"/>
  </div>

  <div class="input-container">
  <img class='icons' src={password} />
    <input class="input-field" type="password" placeholder="Password" name="psw"/>
  </div>

  <button type="submit" class="btn">SIGN UP</button>
  </div>

</form>
{/* 
  asjAOPRi4w3
  <div class="background-cover">
    mahamahamaha
     <img src={bigcover}/>
  </div>  */}

     </div>
  )
}

export default App;