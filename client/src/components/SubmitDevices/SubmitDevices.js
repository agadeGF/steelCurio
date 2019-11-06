import React from 'react';
import useDevices from '../../hooks/useDevices';
import './SubmitDevices.css';

const SubmitDevices = () => {
  const [state] = useDevices();

  return (
    <div className="submit-devices">
      <div>
        <button className="App__install-button" disabled={!state.length}>Add devices to me</button>
      </div>
      <br />
      <div>Or add devices to another person:</div>
      <div className="submit-devices__email">
        <label className="device-list__label">Email: </label>
        <input className="device-list__name" type="email" />
      </div>
      <div>
        <a
          className="App__install-button"
          href="mailto:no-one@snai1mai1.com"
        >Send</a>
      </div>
    </div>
  );
};

export default SubmitDevices;
