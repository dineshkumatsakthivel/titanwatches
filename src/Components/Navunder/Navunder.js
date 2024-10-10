import React, { useState } from 'react'
import './Navunder.css'

import { FaLocationCrosshairs } from "react-icons/fa6";

import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const Navunder = () => {
  
    // const [trans,settrans] = useState("rightup")

    // const [sebox ,setsebox]= useState("hidebox")

    

    const[moveri,setmoveri]= useState("checkborder")

    const moverights=()=>{
        console.log("hai");
        
        setmoveri("checkborder movebox")

    }


   



    // const movebarr=()=>{
    //     settrans("rightup  movlef")
        
    //     setsebox("hidebox  movbox")
        
    // }




    const loacted=()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          }
        
        
        function showPosition(position) {
          window = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
        }
    }
  return (
   <section className='secondbox'>
    <div className='navbarrow p-2 ms-4'>
        <div className='navcollect row'>
            <div className='navitem1 col-lg-1'>Men  
{/* -----------------------------------------------------------------dropb0x------------------------------------- */}

             <div className='homedrop'>
                <div className='row'>
                    <div className='homecol1 col-lg-4'>
                        <ul className='ullist'>
                            <li className='show1'>view all</li>
                            <li className='show1'>new Arive</li>
                            <li className='show1'>Best deal</li>
                            <li className='show1'>Tredning</li>
                            <li className='show3'>smartwatches</li>
                            <li className='show2'>shop by looks ------------ <FaPersonWalkingArrowRight/>
                            
                            <div className='looks'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div> </li>
                            <li className='show9'>shop by brand ------------<FaPersonWalkingArrowRight/>
                            <div className='looks2'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div></li>
                            <li className='show4'>shop by color -------------<FaPersonWalkingArrowRight/>
                            <div className='looks3'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show5'>shop by collection-------- <FaPersonWalkingArrowRight/>
                            <div className='looks4'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show6'>shop by function--------- <FaPersonWalkingArrowRight/>
                            <div className='looks5'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show2'>shop by movment------- <FaPersonWalkingArrowRight/></li>
                            <li className='show2'>shop by price -----------  <FaPersonWalkingArrowRight/></li>

                        </ul>
                    </div>
                    <div className='homecol2 col-lg-4'>
                        
                         </div>
                    <div className='homecol3 col-lg-4 '> 
                        <img className='imghome' src={require("../../titen/Men.webp")} alt="" />
                    </div>

                </div>
             </div>
      
{/* ------------------------------------------------------------xxx------------------------------------------------ */}
                 
            </div>

            <div className='navitem col-lg-1'>Women
{/* -----------------------------------------------------------------dropb0x------------------------------------- */}

            <div className='homedrop1'>
                <div className='row'>
                    <div className='homecol1 col-lg-4'>
                        <ul className='ullist'>
                            <li className='show1'>view all</li>
                            <li className='show1'>new Arive</li>
                            <li className='show1'>Best deal</li>
                            <li className='show1'>Tredning</li>
                            <li className='show3'>smartwatches</li>
                            <li className='show2'>shop by looks ------------ <FaPersonWalkingArrowRight/>
                            
                            <div className='looks'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div> </li>
                            <li className='show9'>shop by brand ------------<FaPersonWalkingArrowRight/>
                            <div className='looks2'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div></li>
                            <li className='show4'>shop by color -------------<FaPersonWalkingArrowRight/>
                            <div className='looks3'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show5'>shop by collection-------- <FaPersonWalkingArrowRight/>
                            <div className='looks4'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show6'>shop by function--------- <FaPersonWalkingArrowRight/>
                            <div className='looks5'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show2'>shop by movment------- <FaPersonWalkingArrowRight/></li>
                            <li className='show2'>shop by price -----------  <FaPersonWalkingArrowRight/></li>

                        </ul>
                    </div>
                    <div className='homecol2 col-lg-4'>
                        
                         </div>
                    <div className='homecol3 col-lg-4 '> 
                        <img className='imghome' src={require("../../titen/homenav.webp")} alt="" />
                    </div>

                </div>
             </div>
      
{/* ------------------------------------------------------------xxx------------------------------------------------ */}
                
            </div>
            <div className='navitemn col-lg-1'>SmartWatches

{/* -----------------------------------------------------------------dropb0x------------------------------------- */}
            <div className='homedrop2'>
                <div className='row'>
                    <div className='homecol1 col-lg-4'>
                        <ul className='ullist'>
                            <li className='show1'>view all</li>
                            <li className='show1'>new Arive</li>
                            <li className='show1'>Best deal</li>
                            <li className='show1'>Tredning</li>
                            <li className='show3'>smartwatches</li>
                            <li className='show2'>shop by looks ------------ <FaPersonWalkingArrowRight/>
                            
                            <div className='looks'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div> </li>
                            <li className='show9'>shop by brand ------------<FaPersonWalkingArrowRight/>
                            <div className='looks2'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div></li>
                            <li className='show4'>shop by color -------------<FaPersonWalkingArrowRight/>
                            <div className='looks3'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show5'>shop by collection-------- <FaPersonWalkingArrowRight/>
                            <div className='looks4'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show6'>shop by function--------- <FaPersonWalkingArrowRight/>
                            <div className='looks5'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show2'>shop by movment------- <FaPersonWalkingArrowRight/></li>
                            <li className='show2'>shop by price -----------  <FaPersonWalkingArrowRight/></li>

                        </ul>
                    </div>
                    <div className='homecol2 col-lg-4'>
                        
                         </div>
                    <div className='homecol3 col-lg-4 '> 
                        <img className='imghome' src={require("../../titen/watch.webp")} alt="" />
                    </div>

                </div>
             </div>

{/* ------------------------------------------------------------xxx------------------------------------------------ */}

            </div>
            <div className='navitemb col-lg-1'>PremiumWatches
{/* -----------------------------------------------------------------dropb0x------------------------------------- */}

                <div className='homedrop3'>
                <div className='row'>
                    <div className='homecol1 col-lg-4'>
                        <ul className='ullist'>
                            <li className='show1'>view all</li>
                            <li className='show1'>new Arive</li>
                            <li className='show1'>Best deal</li>
                            <li className='show1'>Tredning</li>
                            <li className='show3'>smartwatches</li>
                            <li className='show2'>shop by looks ------------ <FaPersonWalkingArrowRight/>
                            
                            <div className='looks'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div> </li>
                            <li className='show9'>shop by brand ------------<FaPersonWalkingArrowRight/>
                            <div className='looks2'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div></li>
                            <li className='show4'>shop by color -------------<FaPersonWalkingArrowRight/>
                            <div className='looks3'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show5'>shop by collection-------- <FaPersonWalkingArrowRight/>
                            <div className='looks4'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show6'>shop by function--------- <FaPersonWalkingArrowRight/>
                            <div className='looks5'>
                            <ul>
                                <li>shop buy</li>
                                <li>workwear watches</li>
                                <li>fashion watches</li>
                                <li>casual watches</li>
                                <li>minmial watches</li>
                            </ul>
                        </div>
                        </li>
                            <li className='show2'>shop by movment------- <FaPersonWalkingArrowRight/></li>
                            <li className='show2'>shop by price -----------  <FaPersonWalkingArrowRight/></li>

                        </ul>
                    </div>
                    <div className='homecol2 col-lg-4'>
                        
                         </div>
                    <div className='homecol3 col-lg-4 '> 
                        <img className='imghome' src={require("../../titen/KC.webp")} alt="" />
                    </div>

                </div>
             </div>
{/* ------------------------------------------------------------xxx------------------------------------------------ */}

            </div>
            <div className='navitem col-lg-1'>Watches</div>
            <div className='navitemb col-lg-1'>InternationalBrand</div>
            <div className='navitem col-lg-1'>Gifting</div>
            <div className='navitem col-lg-1'>sale</div>


        </div>
    </div>

    <div className='locationn container  ' onClick={loacted}>
      <  FaLocationCrosshairs/>
       <input className='inputlocation' type="text" placeholder='please select your loaction using location-Icon' />
    </div>

    <div className='fullimg '>
        <img className='fulimg' src={require("../../titen/BestSellers_HDFC_PLP_D.webp")} alt="" />
    </div>

   
{/* ------------------------------sticky right------------------------------------------------ */}
    
{/* 
            <div className={trans} onClick={movebarr}  >
                  <p className='par'> GET STARTDED <FaArrowUp/></p>
            </div>

            <div className={sebox}   >
        <div className={moveri}>
              <div className='secondlog '  >
              <p className='par'onClick={moverights}>   GET STARTDED  <button className="btnlef" > <FaArrowDown/></button></p>
              </div>
              <span  style={{fontSize:"19px",margin:'30px',}}>YOUR PREFECT WATCH AWAITS</span> <br/>

              <span>explore exclusive discount Coupons</span> <br/>
              <span>partner offers $  coin rewards</span> <br/>

              <span style={{fontSize:'20px',textDecoration:"italic"}}>Sing UP to GET 10% discount</span><br/>

              ------------------------------------------------------------
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
        </div>

     </div> */}

   
   </section>
  )
}

export default Navunder
