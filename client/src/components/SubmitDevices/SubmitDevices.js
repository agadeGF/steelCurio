import React, { useState } from 'react';
import './SubmitDevices.css';

const SubmitDevices = ({ devices }) => {
  const [email, setEmail] = useState(null);
  const subject = 'New GiM devices has been commissioned for you';
  const body = 'Hi, click this link to claim your newly commissioned devices:'

  const fetchClaimId = async () => {
    const response = await fetch(process.env.REACT_APP_DEVICE_REGISTRY_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json-patch+json' },
      body: JSON.stringify({ devices: devices.map(d => ({
        id: d.id,
        label: d.name,
      })) }),
    });
    return await response.text();
  }

  const claimToSelf = async () => {
    const claimId = await fetchClaimId();
    window.location.href = `${process.env.REACT_APP_CLAIM_REDIRECT_URL}/devices?claimId=${claimId}`;
  }

  const sendMail = async () => {
    const claimId = await fetchClaimId();
    const url = `${process.env.REACT_APP_CLAIM_REDIRECT_URL}/devices?claimId=${claimId}`;
    const mailString = `mailto:${email}?subject=${subject}&body=${body} ${url}`;
    window.location.href = mailString;
  }

  return (
    <div className="submit-devices">
      <div>
        <button
          className="App__install-button"
          disabled={!devices.length}
          onClick={claimToSelf}
        >Add devices to me</button>
      </div>
      <br />
      <div>Or add devices to another person:</div>
      <div className="submit-devices__email">
        <label className="device-list__label">Email: </label>
        <input
          className="device-list__name"
          type="email"
          onChange={e => setEmail(e.target.value)}
          disabled={!devices.length}
        />
      </div>
      <div>
        <button
          className="App__install-button"
          onClick={sendMail}
          disabled={!devices.length || !email}
        >Send</button>
      </div>
    </div>
  );
};

export default SubmitDevices;
