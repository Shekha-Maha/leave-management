import React from 'react';

import Item from './Item.js';

import ledger from '../ledger.svg';
import customers from '../customers.svg';
import creditor from '../creditor.svg';
import stock from '../stock.svg';
import inventory from '../inventory.svg';
import suplires from '../suplires.svg';
import sales from '../sales.svg';
import reports from '../reports.svg';
import bank from '../bank.svg';


const App = (props) => {
  return (
   <div>
    <div class='other-items-one'>
       
     <Item
     color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
     name='General Ledger'
     number='3456'
     image={ledger}
     /> 
    
     
     <Item
     color= 'linear-gradient(90deg, #9AE1E2 11.45%, #99F5B9 85.51%)'
     name='Customers'
     number='3456'
     image={customers}
     />
  

    
     <Item
     color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
     name='Creditor'
     number='3456'
     image={creditor}
     />
    
    </div>

    <div class='other-items-one'>
       
     <Item
     color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
     name='Stock'
     number='3456'
     image={stock}
     /> 
    
     
     <Item
     color= 'linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
     name='inventory'
     number='3456'
     image={inventory}
     />
  

    
     <Item
     color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
     name='Suplires'
     number='3456'
     image={suplires}
     />
    
    </div>

    <div class='other-items-one'>
       
       <Item
       color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
       name='Sales'
       number='3456'
       image={sales}
       /> 
      
       
       <Item
       color= 'linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
       name='Reports'
       number='3456'
       image={reports}
       />
    
  
      
       <Item
       color='linear-gradient(90deg, #F29173 5.14%, #F9C547 102.11%)'
       name='Bank'
       number='3456'
       image={bank}
       />
      
      </div>
  

    </div>
  )
}

export default App;