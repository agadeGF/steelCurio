import React from 'react';
import useDevices from '../../hooks/useDevices';

const DeviceList = ({devices}) => {
  // eslint-disable-next-line
  const [state, dispatch] = useDevices();

  const onChange = e => {
    dispatch({type: 'editName', id: e.target.id, name: e.target.value});
  };

  return (
    <div className="commissioning__device-list">
      {
        devices.map(device => (
          <div key={device.id}>
            <label>Device name: </label>
            <input id={device.id} type="text" defaultValue={device.name} onChange={onChange} />
          </div>
        ))
      }
    </div>
  );
};

export default DeviceList;
