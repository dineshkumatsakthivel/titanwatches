import React, { useState } from 'react'
import './Watches.css'

import { IoFilter } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


const Watches = () => {


  const[arr,setarr]=useState([
    {
      img: './watchimg/1639SM02_1.webp',
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 35365"
  }
  ])
  
let DAtas = [
  {
      img: './watchimg/1639SM02_1.webp',
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 35365"
  },
  {
      img: "./watchimg/1648SM01_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Women's Watch",
      prc: "$ 12365"
  },
  {
      img: "./watchimg/1648SM01_1.webp"  ,      
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 5465"
  },
  {
      img: "./watchimg/1713BM02_1.jpg",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Women's Watch",
      prc: "$ 3565"
  },
  {
      img: "./watchimg/1733KL03_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 15365"
  },
  {
      img: "./watchimg/1802NL02_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 55454"
  },
  {
      img: "./watchimg/1805QM04_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Unisex Watch",
      prc: "$ 45365"
  },
  {
      img: "./watchimg/1806NM01_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 35365"
  }, {
      img: "./watchimg/1806NM01_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Women's Watch",
      prc: "$ 24255"
  }, {
      img: "./watchimg/1806NM01_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Unisex Watch",
      prc: "$ 4422"
  }, {
      img: "./watchimg/1824BM03_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 5322"
  }, {
      img: "./watchimg/1825SM11_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 12343"
  }, {
      img: "./watchimg/2606WM08_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 35365"
  },
  {
      img: "./watchimg/2608QM02_1.webp",
      dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
      gen: "Men's Watch",
      prc: "$ 35365"
  },
  {
      img: "./watchimg/2725WM01_1.webp",
      dis: "Titan Men's Timeless Style Watch: Refined Black Dial and Metal Strape",
      gen: "Women's Watch",
      prc: "$ 35365"
  },
// -----------------------------
{
    img: './watchimg/1639SM02_1.webp',
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365"
},
{
    img: "./watchimg/1648SM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Women's Watch",
    prc: "$ 12365"
},
{
    img: "./watchimg/1648SM01_1.webp"  ,      
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 5465"
},
{
    img: "./watchimg/1713BM02_1.jpg",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Women's Watch",
    prc: "$ 3565"
},
{
    img: "./watchimg/1733KL03_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 15365"
},
{
    img: "./watchimg/1802NL02_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 55454"
},
{
    img: "./watchimg/1805QM04_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Unisex Watch",
    prc: "$ 45365"
},
{
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365"
}, {
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Women's Watch",
    prc: "$ 24255"
}, {
    img: "./watchimg/1806NM01_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Unisex Watch",
    prc: "$ 4422"
}, {
    img: "./watchimg/1824BM03_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 5322"
}, {
    img: "./watchimg/1825SM11_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 12343"
}, {
    img: "./watchimg/2606WM08_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365"
},
{
    img: "./watchimg/2608QM02_1.webp",
    dis: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
    gen: "Men's Watch",
    prc: "$ 35365"
},
{
    img: "./watchimg/2725WM01_1.webp",
    dis: "Titan Men's Timeless Style Watch: Refined Black Dial and Metal Strape",
    gen: "Women's Watch",
    prc: "$ 35365"
},
]

const [zommer,setzoomer]=useState("hidebox1")
const zoomer=()=>{
    console.log("hai");
    setzoomer("hidebox1 hidebox2")
    
}

const closerd=()=>{
  setzoomer("hidebox1 ")
}
// -------------------search------------------------------------
const[serac,setserac]= useState("")
console.log();

let searchdata = serac.toLowerCase() 

let searchArray = []


searchArray =    DAtas.filter((v , i )=>{

      return v.gen.toLowerCase().includes(searchdata)

})

console.log(searchArray);
DAtas = searchArray


  return (
  <>
   <div>
       {/* --------------sticky----------------------  */}
     <div className='stickdiv '>
        <div className='row '>
            <div className='col-3 col-lg-1'>FilterBy GENDER</div>
            <div className='col-2 col-lg-1'><button>Men</button></div>
            <div className='col-2 col-lg-1'><button>Wome</button></div>
            <div className='col-2 col-lg-1'><button>Unisex</button></div>
            <div className='col-2 col-lg-1'><button>Couple</button></div>
            <div className='col-12 col-lg-3'><button><FaSearch/></button><input onChange={(e)=>setserac(e.target.value)}  type="Search"  placeholder='Search products  ' /></div>
            <div className='ofmed col-lg-2'  onClick={zoomer}><button><IoFilter/> Show Filter</button></div>
            <div className='ofmed col-lg-2'><input type="text" placeholder='storedby' /></div>




        </div>
     </div>

  </div>  
{/* --------------------------maindiv------------------------------ */}
   <section className='divededbox container-fluid'>
    {/* --------------------------------1st box----------------------- */}
    <div className={zommer} >
      <div>
       <div>  
          <IoClose className='closerd' onClick={closerd}/></div>

       <div className='colorbox'>
        <h2>GENDER</h2>
        <input type="checkbox" name='Men' /><label>Men</label><br/>
        <input type="checkbox" name='Women' /><label>Women</label><br/>
        <input type="checkbox" name='Unisex' /><label>Unisex</label><br/>
        <input type="checkbox" name='Couples' /><label>Couples</label><br/>


       </div>
       <div className='pri'>
       <h2>GENDER</h2>
       <input type="text" className='inval' /> <input type="text" className='inval2' />
       <input type="range" min={1000} max={60000} className='rangeval'/>

        
       </div>
       <div className='Strap'>
        <h2>STRAP TYPE</h2>
        <input type="checkbox" name='slicone' /><label>slicone</label><br/>
        <input type="checkbox" name='lather' /><label>lather</label><br/>
        <input type="checkbox" name='ceramic' /><label>ceramic</label><br/>
        <input type="checkbox" name='metal' /><label>metal</label><br/>
       </div>

       <div className='functionns'>
        <h2>   Function</h2>
        <input type="checkbox" name='Chronograph' /><label>Chronograph</label><br/>
        <input type="checkbox" name='Smart' /><label>Smart</label><br/>
       </div>

       <div className='Specialfu'>
        <h2> Special Features</h2>
        <input type="checkbox" name='Accelerometer ' /><label>Accelerometer </label><br/>
        <input type="checkbox" name='Activity Tracker' /><label>Activity Tracker</label><br/>
        <input type="checkbox" name='Alarm Clock' /><label>Alarm Clock</label><br/>
            </div>

            <div className='sport'>
        <h2> Sport Type</h2>
        <input type="checkbox" name=' Cycling ' /><label> Cycling </label><br/>
        <input type="checkbox" name='Fitness ' /><label>Fitness</label><br/>
        <input type="checkbox" name='iking' /><label>iking</label><br/>
        <input type="checkbox" name='Multi-Sports' /><label>Multi-Sports</label><br/>

</div>
            
       </div>
    </div>
{/* ----------------------------2nd box----------------------------------- */}
    <div className='mainbox1'>
     
     {DAtas.map((v,index)=>{
      return( 
        <div className='gridbox d-grid '>
       <span><CiHeart className='iconha'/></span>  
       <div className='imgbox1'><img className='vimg' src={require(${v.img})} alt="" /></div>  
       <div className='dis'>{v.dis}</div>
       <div className='gen'>{v.gen}</div>
       <div className='prc'>{v.prc}</div>

       

    </div>

      )

     })}

         
     

    </div>
   </section>
  
  
  
  
  </>
      
    
  )

  






 