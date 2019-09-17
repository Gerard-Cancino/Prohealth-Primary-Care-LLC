import React from 'react';
import PropTypes from 'prop-types';

class Slideshow extends React.Component{
  componentDidMount(){
    this.noDisplaySlide();
    this.displayCurrentSlide();
  }
  componentDidUpdate(){
    this.noDisplaySlide();
    this.displayCurrentSlide();
  }
  noDisplaySlide () {
    const carouselList = document.getElementsByClassName('item');
    // eslint-disable-next-line
    for(let carousel of carouselList){
      carousel.style.display = "none";
      carousel.classList.remove('active');
    }
    const dotList = document.getElementsByClassName('dot');
    // eslint-disable-next-line
    for(let dot of dotList){
      dot.classList.remove('active');
    }
  }
  displayCurrentSlide() {
    const item = document.getElementById(`carousel${this.props.slideIndex}`);
    if(item!==null){
      item.style.display = "flex";
      item.classList.add('active');
    }
    const dot = document.getElementById(`indicator${this.props.slideIndex}`);
    if(dot!==null)
      dot.classList.add('active');
  }
  render(){
    return(
      <React.Fragment>
        <div id="slideshow" className="offset-1 col-10" style={{backgroundColor:'rgba(0, 0, 0, 0.2)', height:'60vh'}}>
          <div className="row align-self-center h-100">
            <button id="prevButton" className="col-2 col-sm-1 slideButton h-100" onClick={(e)=>this.props.prevSlide(e)} style={{outline:'none'}}>&#10094;</button>
            <div className="col-8 col-sm-10 p-0 align-self-center h-75">
            {this.props.formList.map((formChunk,index)=>(          
              <div key={index} id={`carousel${index}`} className={`item h-100 row ${index===this.props.slideIndex?('active d-flex'):('d-none')}`}>   
              {formChunk.map(form=>(
                <a key={form.url} href={form.url} className={`form h-100 ${this.props.splitBy===4&&'col-3'} ${this.props.splitBy===3&&'col-4'} ${this.props.splitBy===2&&'col-6'} ${this.props.splitBy===1&&'col-12'} p-0 mx-0`}>
                  <embed className="w-100 h-75 p-2" src={form.sample} alt="Need Form"/>
                  <div className="h-25 d-flex p-2 justify-content-center">
                    <p className="text-center align-self-center mb-0" style={{color:'white', textOverflow: 'ellipsis', overflow:'hidden'}}><strong>{`${form.title}`}</strong></p>
                  </div>
                </a>
              ))}
              </div>
            ))}
            </div>
            <button id="nextButton" className="col-2 col-sm-1 slideButton h-100" onClick={(e)=>this.props.nextSlide(e)} style={{outline:'none'}}>&#10095;</button>
            <ol className="carousel-indicators col-12 m-0">
              {this.props.formList.map((form,index)=>(
                <li key={index} id={`indicator${index}`} onClick={(e)=>this.props.chooseSlide(e,index)} className={`dot ${index===this.props.slideIndex?('active'):('')}`}></li>
              ))}
            </ol>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Slideshow.propTypes={
  formList: PropTypes.array.isRequired,
  splitBy: PropTypes.number.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  chooseSlide: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired
}

export default Slideshow;