import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CouponValidator from './components/CouponValidator';
import './App.css';

function App() {
  return (
    <div className="App m-3">
      <Jumbotron>
          <h1>Coupon Check</h1>
          <p>Check the validity of a coupon code</p>
          <CouponValidator/>
      </Jumbotron>
    </div>
  );
}

export default App;
