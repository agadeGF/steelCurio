import React, { useState } from 'react';
import useDevices from '../../hooks/useDevices';
import './SubmitDevices.css';

const SubmitDevices = () => {
  const [state] = useDevices();
  const [email, setEmail] = useState(null);
  const [url, setUrl] = useState('http://www.angelfire.com/dc/html-webmaster/mailto.htm');
  const subject = 'New GiM devices has been commissioned for you';
  const body = 'Hi, click this link to claim your newly commissioned devices:'
  const mailString = `mailto:${email}?subject=${subject}&body=${body} ${url}`;

  const onClick = () => {
    window.location.href = mailString;
  }

  return (
    <div className="submit-devices">
      <div>
        <button className="App__install-button" disabled={!state.length}>Add devices to me</button>
      </div>
      <br />
      <div>Or add devices to another person:</div>
      <div className="submit-devices__email">
        <label className="device-list__label">Email: </label>
        <input
          className="device-list__name"
          type="email"
          onChange={e => setEmail(e.target.value)}
          disabled={!state.length}
        />
      </div>
      <div>
        <button
          className="App__install-button"
          onClick={onClick}
          disabled={!state.length || !email}
        >Send</button>
      </div>
    </div>
  );
};

export default SubmitDevices;
