import React from 'react';
import trainingVideo from '../../assets/video/Video-1.mp4';

const Training = () => (
  <div className="video-container">
    <video controls>
      <source src={trainingVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Training;
