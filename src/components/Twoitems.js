
import React from 'react';

const App = () => {
  return (

 <div class='two-table'>

<div class="flex-container">
  <div class="flex-item-left">
  <h2 class="align-left">Earnings</h2>

<table>
  <tr>
    <td>Basic Salary</td>
    <td class ="amount">5000</td>
  </tr>
  <tr>
    <td>House Rent Alloawence (H.R.A)</td>
    <td class ="amount">200</td>
  </tr>
  <tr>
    <td>Conveyance</td>
    <td class ="amount">150</td>
  </tr>
  <tr>
    <td>Other Alloawence</td>
    <td class ="amount">200</td>
  </tr>
  <tr>
    <td>Total Earnings</td>
    <td class ="amount">5550</td>
  </tr>
</table>
  </div>
  <div class="flex-item-right">
  <h2 class="align-left">Deductions</h2>

<table>
  <tr>
    <td>Tax Deducted at Source (T.D.S)</td>
    <td class ="amount">0</td>
  </tr>
  <tr>
    <td>Provident Fund</td>
    <td class ="amount">150</td>
  </tr>
  <tr>
    <td>ESI</td>
    <td class ="amount">0</td>
  </tr>
  <tr>
    <td>Other Loan</td>
    <td class ="amount">200</td>
  </tr>
  <tr>
    <td>Total Deductions</td>
    <td class ="amount">350</td>
  </tr>
</table>
  </div>
</div>
     </div>
  )
}

export default App;