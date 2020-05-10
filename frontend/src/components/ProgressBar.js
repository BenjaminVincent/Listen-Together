import React, { useState, useEffect } from 'react';

const ProgressBar = ({ fetchDate, progress, duration, playing }) => {

  const [currentDate, setCurrentDate] = useState(Date.now());

  const progressBarStylesPlaying = {
    width: ((currentDate - fetchDate + progress) * 100 / duration) + '%'
  };

  const progressBarStylesPaused = {
    width: ((progress) * 100 / duration) + '%'
  };

  useEffect(() => {
      setInterval(() => setCurrentDate(Date.now()), 1000);
  }, [])

  if (playing) {
    return (
    <div className='progress'>
      <div className='progress__bar' style={progressBarStylesPlaying} />
    </div>
    )
  } else {
    return (
    <div className='progress'>
      <div className='progress__bar' style={progressBarStylesPaused} />
    </div>
    )
  }
}

export default ProgressBar;