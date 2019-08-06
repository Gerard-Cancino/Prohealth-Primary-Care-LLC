import React from 'react';

const ContactUs = (props) =>{
  return(
    <React.Fragment>
      <span id="contact"></span>
      <div className="container-fluid align-self-center">
        <br className="d-inline d-sm-none"/>
        <br className="d-inline d-sm-none"/> 
        <br className="d-inline d-md-none"/> 
        <div className="row">
          <div className="col-12 col-md-12 text-center" style={{color:'white'}}>
            <h1 className="text-center" style={{color:'white'}}><strong>Contact Us</strong></h1>
            <br className="d-none d-lg-inline"/>
          </div>
          <div className="col-3 col-md-12 text-center" style={{color:'white'}}>
            <h5><strong>Hours of Operations</strong></h5>
            <p className="m-0">Monday - Friday:</p> 
            <p className="">7AM to 4:30PM</p>
            <p className="m-0">Saturday - Sunday:</p>
            <p>Closed</p>
          </div>
          <div className="col-3 col-md-12 text-center" style={{color:'white'}}>
            <h5><strong>Address:</strong></h5>
            <p className="m-0">115 W. Bel Air Ave,</p>
            <p>Aberdeen, MD 21001</p>
          </div>
          <div className="col-3 col-md-12 text-center" style={{color:'white'}}>
            <h5><strong>Phone Number</strong></h5>
            <p className="m-0">Nathaniel M. Sumilang, M.D.</p>
            <p className="m-0">(410)-272-3377</p>
            <p className="m-0">Gwenneth Cancino, M.D.</p>
            <p>(410)-272-1692</p>
          </div>
          <div className="col-3 col-md-12 text-center" style={{color:'white'}}>
            <h5><strong>Email</strong></h5>
            <p>TODO</p>
            <h5><strong>Fax</strong></h5>
            <p>(410)-273-1479</p>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}


export default ContactUs;