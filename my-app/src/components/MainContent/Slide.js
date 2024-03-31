import React from 'react';

const Slide = ({ numbertext, imgSrc, display }) => (
  <div className="mySlides fade" style={{display}}>
    <div className="numbertext">{numbertext}</div>
    <img src={imgSrc} alt="" style={{width: "100%"}} />
  </div>
);

export default Slide;
