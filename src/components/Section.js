import React from 'react';
import PropTypes from 'prop-types';


const Section = (props) => {
  return(
    <section id={props.theKey} key={props.theKey} className="container-fluid" style={props.sectionStyle}>
      <div className="row" style={props.backgroundStyle}>
        <props.body />
      </div>
    </section>
  );
}

Section.propTypes = {
  backgroundStyle: PropTypes.object.isRequired,
  body: PropTypes.func,
  theKey: PropTypes.string.isRequired
}


export default Section;
