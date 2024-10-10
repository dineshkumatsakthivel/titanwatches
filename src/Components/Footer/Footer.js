import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footmain container-fluid'>
        <div className='row'>
            <div className='col-6 col-md-2 col-lg-2'>
                <h3>COLLECTIONS</h3>
                <p>Titan Automatics</p>
                <p>Police Batman</p>
                <p>Stellar</p>
                <p>Raga Power Pearls</p>
                <p>Nebula Jewels</p>
                <p>Grandmaster </p>

            </div>
            <div className='col-6 col-md-2 col-lg-2'>
                <h3>CUSTOMER SERVICE</h3>
                <p>Payment Options</p>
                <p>Track Order</p>
                <p>Encircle Program
                </p>
                <p>Find Titan World Stores</p>
               

            </div>
            <div className='col-6 col-md-2 col-lg-2'>
                <h3>CCONTACT US</h3>
                <p>1800-266-0123</p>
                <p>customercare@titan.co.in</p>
                <p>Help & Contact</p>
                <p>FAQs</p>
                
            </div>
            <div className='col-6 col-md-2 col-lg-2'>
                <h3>ABOUT TITAN</h3>
                <p>1Brand Protection</p>
                <p>Corporate</p>
                <p>Careers</p>
                <p>log</p>
                
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <h3>Download Titan World App</h3>
                <p><img src={require('../../titen/Group 15609.webp')} alt="" /></p><p><img src={require('../../titen/Group 15610@2x.webp')} alt="" /></p>
                <p>Follow Us With</p>
                <p></p>
                <p>Want Help? Click Here To Chat With Us On</p>
                <p>Operating Hours: 10:00AM To 10:00PM Monday To Sunday</p>
                
            </div>
            

        </div>
    </section>
  )
}

export default Footer
