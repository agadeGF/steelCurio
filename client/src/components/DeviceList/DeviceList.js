import React from 'react';
import useDevices from '../../hooks/useDevices';

const DeviceList = ({devices}) => {
  return (
    <div className="commissioning__device-list">
      {
        devices.map(device => (
          <div key={device.id}>
            <label>Device name: </label>
            <input type="text" defaultValue={device.name} />
          </div>
        ))
      }
    </div>
  );
};

export default DeviceList;
