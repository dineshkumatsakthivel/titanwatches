import React, { useState } from 'react'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './Sidebox.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Sidebox = () => {
     
        const[showbox,setshowbox]=useState("sidebox")

        const showboxe=()=>{
                // console.log("hiai");
                setshowbox("sidebox  kami")

                

        }

        const hidedata2=()=>{
                setshowbox("sidebox")
        }
    return (
   <>

<div className='secondlog '  >
              <p className='par'>  GET STARTDED  <button className="btnlef"  onClick={showboxe}> <FaArrowUp /></button></p>
              </div>
      <div className={showbox}  >
    
      <div  data-aos="fade-down-left" className='box1'>
        
      
              
              <span  style={{fontSize:"19px",margin:'30px',}}>YOUR PREFECT WATCH AWAITS</span> <br/>

              <span className='text-secondary'>explore exclusive discount Coupons</span> <br/>
              <span className='text-dark'>partner offers $  coin rewards</span> <br/>

              <span style={{fontSize:'20px',textDecoration:"italic"}}>Sing UP to GET 10% discount</span><br/>
--------------------------------------------------------------------
              <div className='singdetials'>
                <div className='row'>
                    <div className='col-lg-2'>
                        100% orginal
                    </div>
                    <div className='col-lg-2'>
                        7dayd replacemnt
                    </div>
                    <div className='col-lg-4'>
                        Free Shipping
                    </div>
                    <div className='col-lg-2'>
                         <button className='btn1'>Sing UP</button>
                    </div>
                
              </div>
</div>
<div>
  <p className='par1'>   GET STARTDED  <button className="btnlef" onClick={hidedata2} > <FaArrowDown/></button></p>

  </div>
      </div>
      </div>
   </>

            )
}

            export default Sidebox
