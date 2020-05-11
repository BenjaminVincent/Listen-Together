import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/Player.css';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


const PlayerHost = ({
  playing,
  item,
  song,
  progress,
  duration,
  artist,
  album,
  image,
  fetchDate,
  handlePausePlay,
  sendSongData,
  host,
}) => {

  const backgroundStyles = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div>
      <div className='main-wrapper'>
        <div className='now-playing__img'>
          <img src={image} alt='not found'/>
        </div>
        <div className='now-playing__side'>
          <div className='now-playing__name'>{song}</div>
          <div className='now-playing__artist'>
           Artist: {artist} <br/>
           Album: {album}
          </div>
            <ProgressBar
              fetchDate={fetchDate}
              progress={progress}
              duration={duration}
              item={item}
              playing={playing}
            />
          <div className='background' style={backgroundStyles} />{' '}
        </div>
        {
        host ?
        <span 
        type='button' 
        className='pp-btn btn--pause-play'
        onClick={() => {
          sendSongData();
          handlePausePlay();
        }}
        >
        {playing ? <FaPauseCircle/> : <FaPlayCircle/>}
      </span>
      :
      null
      }
      </div>

    </div>
  );
}

export default PlayerHost;