import React, { useEffect } from 'react';
import ExpenseItem from '../Component/ExpenseItem'; 
import { details } from './../Utils/ExpenseData'; 
import { useState } from 'react';
export const HomePage = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    setData(details);
  },[]);
    return (
      <div className="layout-container__wrapper">
        <div className="flexbox flexbox-justify-between flexbox-align-baseline">
          <h3>Expenses</h3>
          <span className="pill info">INR 770</span>
        </div>
        <hr />
        <div className="layout-container__expenses">
          <ul>
          {details.map(i=><ExpenseItem detail={i}/>)}
          </ul>
        </div>
      </div>
    );
  };
  
  export default HomePage;