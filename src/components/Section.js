import React from 'react';
import PropTypes from 'prop-types';


const Section = (props) => {
  return(
    <section id={props.theKey} key={props.theKey} className="container-fluid section-height" style={props.sectionStyle}>
      <div className="row background-height" style={props.backgroundStyle}>
        <props.body redoPositioning={props.redoPositioning}/>
      </div>
    </section>
  );
}

Section.propTypes = {
  backgroundStyle: PropTypes.object.isRequired,
  body: PropTypes.func,
  theKey: PropTypes.string.isRequired,
  sectionStyle: PropTypes.object.isRequired,
  redoPositioning: PropTypes.func
}


export default Section;
