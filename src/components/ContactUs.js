import React from 'react';



const ContactUs = (props) =>{
  function mapClick(){
    document.getElementById('map-iframe').classList.add('clicked');
  }
  function mapLeave(){
    document.getElementById('map-iframe').classList.remove('clicked');
    window.scrollTo(0,0)
  }
  return(
    <React.Fragment>
      <div className="header-section w-100" id="contact"></div>
      <div className="container-fluid  body-section d-flex">
        <div className="my-auto w-100">
          <div className="row h-100 ">
            <div className="col-12 col-lg-12" style={{color:'white'}}>
              <h1 id="contact-header" className="text-center m-0" style={{color:'white'}}><strong>Contact Us</strong></h1>
              <br className="d-none d-lg-inline"/>
              <br className="d-none d-xl-inline"/>
            </div>
            <div id="contact-info" className="d-flex d-lg-block col-6 p-0">
              <div className="col-3 col-lg-12 text-center cus-col" style={{color:'white'}}>
                <h5><strong>Hours of Operations</strong></h5>
                <p className="m-0">Monday - Friday:</p> 
                <p className="">7AM to 4:30PM</p>
                <p className="m-0">Saturday - Sunday:</p>
                <p>Closed</p>
              </div>
              <div className="col-3 col-lg-12 text-center cus-col" style={{color:'white'}}>
                <h5><strong>Address:</strong></h5>
                <p className="m-0">115 W. Bel Air Ave,</p>
                <p>Aberdeen, MD 21001</p>
              </div>
              <div className="col-3 col-lg-12 text-center cus-col" style={{color:'white'}}>
                <h5><strong>Phone Number</strong></h5>
                <p className="m-0">Nathaniel M. Sumilang, M.D.</p>
                <p className="m-0">(410)-272-3377</p>
                <p className="m-0">Gwenneth Cancino, M.D.</p>
                <p>(410)-272-1692</p>
              </div>
              <div className="col-3 col-lg-12 text-center cus-col" style={{color:'white'}}>
                <h5><strong>Email</strong></h5>
                <p ><a style={{color:'white'}} href="mailto: n.sumilang@zoominternet.net">n.sumilang@zoominternet.net</a></p>
                <h5><strong>Fax</strong></h5>
                <p>(410)-273-1479</p>
              </div>
            </div>
            <div className='col-6 p-0 d-flex' onClick={mapClick} onMouseLeave={mapLeave} id="map" >
              <iframe id='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.172971513571!2d-76.16808628428184!3d39.510585618170445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c19ab8509d01%3A0x5c5106032c396472!2s115+W+Bel+Air+Ave%2C+Aberdeen%2C+MD+21001!5e0!3m2!1sen!2sus!4v1565991319846!5m2!1sen!2sus" className="h-100 w-75 m-auto border-0" title="map" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}


export default ContactUs;
