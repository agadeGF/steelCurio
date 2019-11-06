import React from 'react';
import useDevices from '../../hooks/useDevices';
import './DeviceList.css';

const DeviceList = ({devices}) => {
  // eslint-disable-next-line
  const [state, dispatch] = useDevices();

  const onChange = e => {
    dispatch({type: 'editName', id: e.target.id, name: e.target.value});
  };

  const onClick = e => {
    if (e.target.value === e.target.id) {
      e.target.value = '';
    }
  }

  return (
    <div className="device-list">
      {
        devices.map(device => (
          <div key={device.id}>
            <label className="device-list__label">Device name: </label>
            <input
              id={device.id}
              className="device-list__name"
              type="text"
              defaultValue={device.name}
              onChange={onChange}
              onClick={onClick}
            />
          </div>
        ))
      }
    </div>
  );
};

export default DeviceList;
