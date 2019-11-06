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
        <label>Email: </label>
        <input type="email" disabled={true} />
      </div>
      <div>
        <button className="App__install-button" disabled={true}>Send</button>
      </div>
    </div>
  );
};

export default SubmitDevices;
