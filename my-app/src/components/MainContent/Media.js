import React, { useState } from 'react';
import Slide from './Slide';

const slidesData = [
  { numbertext: '1 / 3', imgSrc: require('../../assets/images/Image-1.jpg') },
  { numbertext: '2 / 3', imgSrc: require('../../assets/images/Image-2.jpg') },
  { numbertext: '3 / 3', imgSrc: require('../../assets/images/Image-3.jpg') },
];

const Media = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 0) newIndex = slidesData.length - 1;
    else if (newIndex >= slidesData.length) newIndex = 0;
    setSlideIndex(newIndex);
  };

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <Slide key={index} {...slide} display={index === slideIndex ? 'block' : 'none'} />
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default Media;
