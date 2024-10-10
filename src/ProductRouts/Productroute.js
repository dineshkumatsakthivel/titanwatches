import React, { useState } from 'react';
import { json, Navigate, Outlet } from 'react-router-dom';

const Productroute = () => {
    
   
  
   

    let condition  = JSON.parse(localStorage.getItem("path"))

    // const handel =()=>{
    // setcondition ( localStorage.getItem("path"))}

    // const Outlet = setcondition( json.pars( localStorage.getItem("path")))

    

    return condition !== null ? <Outlet /> :<Navigate  to="/login"/> 
        

}

export default Productroute;
