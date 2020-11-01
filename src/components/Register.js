import React from 'react';
import fullname from '../fullname.svg';
import email from '../email.svg';
import phone from '../phone.svg';
import password from '../password.svg';

const App = () => {
  return (

  <div class='main-signup'>
   <form >
  <div class="signUpBack">
  <div class="input-container">
  <img class='icons' src={fullname} />
    <input class="input-field" type="text" placeholder="Username" name="usrnm"/>
  </div>

  <div class="input-container">
  <img class='icons' src={email} />
    <input class="input-field" type="text" placeholder="Email" name="email"/>
  </div>

  <div class="input-container">
  <img class='icons' src={phone} />
    <input class="input-field" type="phone" placeholder="Phone Number" name="psw"/>
  </div>

  <div class="input-container">
  <img class='icons' src={password} />
    <input class="input-field" type="password" placeholder="Password" name="psw"/>
  </div>

  <button type="submit" class="btn">SIGN UP</button>
  </div>
</form>
     </div>
  )
}

export default App;