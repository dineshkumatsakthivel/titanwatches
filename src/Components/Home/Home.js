import React from 'react'
import './Home.css'
import { useState } from 'react'

import { GiPocketWatch } from "react-icons/gi";
import { GiRamProfile } from "react-icons/gi";
import { FaHeart,FaShoppingCart ,FaTractor ,FaWindowClose} from "react-icons/fa";
import Marquee  from 'react-fast-marquee';
import { SiPlatformdotsh } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import Navunder from '../Navunder/Navunder';
import Watches from '../Watchlist/Watches';
import Sidebox from '../Navunder/Sidebox/Sidebox';
import Footer from '../Footer/Footer';
import Watchlist from '../Watchlist/Whislist';



function Home() {
  const [active ,setactive]= useState("thongubox")

  

  const handel =()=>{
      setactive("thongubox showdropbox")
  }
  const dropclose =()=>{
      setactive("thongubox")
  }
  const logoutbtn=()=>{
   
      localStorage.clear("path");
      window.location.reload(true)
    }

    // -----------creat nav hiden ------------

    const [hidenav , sethidenav]= useState("navleft")

    const hiddenbox=()=>{

      sethidenav("navleft  activehide")
      console.log("hai");
      
    }
    const removenavbox=()=>{
      sethidenav("navleft")
    }
  
  
  return (
  <> <div>
      
<section className='navhead'>
    <div className='runinghbar '>
        <Marquee speed={200} ><span className='marquee ms-5'> Use code YUVE on get 10% discount on Non-Discount Wataches .....</span>
    <span className='runing'> 850$ offer price for up 5000 purches valid till NOV-30 </span> </Marquee>
    </div>
    {/* ------second nav box------------------------- */}
    <div className='navhome flex  mt-0'>
        <div className='navLogo flex  col-12 col-lg-4'>
           <GiPocketWatch className='icon' /><span>Titan</span></div>
        
        <div className='dot ' onClick={hiddenbox}><SiPlatformdotsh/></div>
        <div className='romvebtn' onClick={removenavbox}><MdCancel/></div>
          
        <div  className={hidenav}>
          {/* className navleft and bootstrap have been change from satename */}

            <div  onMouseEnter={handel} className='logoicon  col-lg-2'>
            <GiRamProfile className='icon'/>
            <h5 >Account</h5>
            {/* -----------------dropbox--------------------------------- */}
          <div   onMouseLeave={dropclose} className={active}>
           
            <h4>New to Titan?</h4>
            <span >singup/Login the best Experience</span><br/>
            <button>singup</button> or <button>Login</button><br/>
            <div className='droplist '>
                <h4>Whislits</h4>
                <h4>Giftcard</h4>
                <h4>find a Stroe</h4>
                <h4>Help and Contact</h4>
                <h4>FAQ</h4>


            </div>
            
          
          </div>
          {/* ----------------------------- */}
                
            </div>
            <div className='logoicon col-lg-1'>
                <FaHeart className='icon'/>
                <h5>Whislits</h5>

            </div>
            <div className='logoicon  col-lg-1'>
                <FaShoppingCart  className='icon'/>
                <h5>Cart</h5>

            </div>
            <div className='logoicon col-lg-1 '>
                <FaTractor  className='icon'/>
                <h5>Track</h5>

            </div>
            <div className='logoicon col-lg-1'>
            <button onClick={logoutbtn}>logout</button>
            </div>
        </div>

       
    </div>
  
</section>

      {/* ------------------- */}
     
    </div>
    {/* // ---------------------other components ---------------------- */}

    <Navunder/>
    <Sidebox/>
    <Watches/>
    <Footer/>
    </> 
  )
}

export default Home
