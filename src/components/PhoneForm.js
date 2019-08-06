import React from 'react';
import Footer from './Footer';

const Form = () => {
  return(
    <React.Fragment>
      <span id="form"></span>
      <div className="offset-md-1 col-md-10 align-self-center mt-5">
        <div className="row ">
          <h1 className="col-md-12 text-center mt-5" style={{color:'white'}}><strong>Forms</strong></h1>
          <br />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}


export default Form;
