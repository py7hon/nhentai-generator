import React from 'react';
import './Surprise.scss'

const Surprise = () => {
  let videos =
        "https://www.youtube.com/embed/dQw4w9WgXcQ" +
        "?autoplay=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&autohide=1";
  return (
    <div className="container">
      <div className="video-wrapper">
        <iframe title="youtube-wrapper" src={videos} frameBorder="0"/>
      </div>
    </div>
  );
};

export default Surprise;
