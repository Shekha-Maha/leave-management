import React from 'react';
import logoimg from '../logoimg.svg';
import profile from '../profile.svg';
import list from '../list.svg';
import calender from '../calender.svg';
import payment from '../payment.svg';
import button from '../button.svg'
import darklogosmall from '../darklogosmall.svg';

import '../../src/components/Navigation/navigation.css';



const App = () => {
  return (
    <div>
       <img class="small-logo" src={darklogosmall}/>
       
      <div class="topnav">

      <div class='logo' >
         <img class="large-logo" src={logoimg}/>  
      </div>
        <a href="#payment" class="first-child">    <span class="nav-title">Payment</span> <img src={payment}/></a>
        <a href="#calender">   <span class="nav-title">Calender</span><img src={calender}/></a>
        <a class="blank-div">   <span class="nav-title"></span></a>
        <a href="#list">       <span class="nav-title third-child">List</span>    <img src={list}/></a>
        <a href="#profile">    <span class="nav-title last-child">profile</span> <img src={profile}/></a>
      </div>
        <a class="plus-sign" ><span class="plus">+</span></a>
        <a class="white-border" ></a>


    </div>
  )
}

export default App;