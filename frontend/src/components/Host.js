import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { generateID } from '../helpers/player-helper.js';
import '../styles/Player.css';
import '../styles/App.css';
import '../styles/Host.css';
import Chat from './Chat';



const Host = ({ token }) => {
 
  const [name, setName] = useState('');
  const [room, setRoom] = useState(generateID);

  return (
    <div className='joinOuterContainer'>
      <div className='heading'>Host session</div><br/>
      <div>
        <div>
          <input 
              placeholder='Display Name' 
              className='joinInput' 
              type='text' 
              onChange={(event) => {
                setName(event.target.value);
                }}/></div><br/>
        <div>
          <Link
            onClick={(event) => {if(!name) event.preventDefault()}}
            to={`/sessionhost?name=${name}&room=${room}`}>
            <button 
              className='btn btn--loginApp-link' 
              type='submit' 
            >join</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Host;