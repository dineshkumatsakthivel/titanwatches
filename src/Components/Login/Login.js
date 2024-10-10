import React, { useState } from 'react';
import { GiPocketWatch } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = ({name}) => {
    const Navigate = useNavigate()
 console.log(name);
 

    const [fromcheck, setformcheck]= useState({
        email:"",
        password:""
    })

    const[emailcrt ,setemailcrt]=useState("")

    const[passwrd ,setpaswrd]= useState("")
    const[success,setsuccess] = useState("")

    
    
    
    console.log(emailcrt);
    

    const emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordrex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/; 


   
  

//   if (emailr ===""|| emailr === false) { 
//           setemailcrt("enter valid email")}
const handeld=(e)=>{
    const emailr = emailreg.test(fromcheck.email)
    const pass = passwordrex.test(fromcheck.password)
   e.preventDefault()
   console.log(emailr,pass);

   if(emailr=== false || emailr === ""){
    // console.log("error");
    setemailcrt("Please valid email")
    setTimeout(() => {
      setemailcrt("")
    }, 4000);
    
   }
   else if(pass === false || pass === ""){
    console.log("oddo");
    
    setpaswrd("User Symbol,Num,Alapabet,abouve 7 letter")
    setTimeout(() => {
      setpaswrd("")
    }, 4000);
   }
    else{

    setsuccess("success")
    setemailcrt("")
    setformcheck("")
    setpaswrd("")
    
    localStorage.setItem("path" ,JSON.stringify("allow"))

    Navigate("/")

   }
    
    

    
}
    return (
        <section>
            <div className="container mt-3">
<h3 className='loginheading mt-5'><GiPocketWatch/> Titan </h3>
  <p>Try to submit your details</p>
    
  <form action="" className="was-validated" onSubmit={handeld} >
    <div className="mb-3 mt-3">
      <label for="uname" className="form-label">Username:</label>
      <input type="text" className="form-control" value={fromcheck.email} onChange={(e)=>{{setformcheck(fromcheck=>({...fromcheck,email:e.target.value}))}}} id="uname" placeholder="Enter username" name="uname"  />
      <div style={{color:"green"}}>{success}</div>
      {/* {emailcrt.length < 0 && (<div style={{color:"green",font:'10px'}}>{emailcrt}</div>)} */}
      {/* <div className="invalid-feedback">Please fill out this field.</div> */}
      <div style={{color:"red"}}>{emailcrt}</div>

    </div>
    <div className="mb-3">
      <label for="pwd" className="form-label">Password:</label>
      <input type="password" className="form-control" value={fromcheck.password} onChange={(e)=>{{setformcheck(fromcheck=>({...fromcheck,password:e.target.value}))}}} id="pwd" placeholder="Enter password" name="pswd"   />
       <div className='hideneye'><FaRegEyeSlash/></div> 
      <div style={{color:"green"}}>{success}</div>

      {/* <div className="invalid-feedback">Please fill out this field.</div> */}
      <div style={{color:"red"}}>{passwrd}</div>

    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
        </section>
    );
}

export default Login;
