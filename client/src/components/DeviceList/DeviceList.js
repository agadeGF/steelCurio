import React from 'react';
import './DeviceList.css';

const DeviceList = ({devices, onChangeName}) => {
  const onChange = e => {
    onChangeName(e);
  };

  const onClick = e => {
    if (e.target.value === e.target.id) {
      e.target.value = '';
    }
  }

  const onBlur = e => {
    if (!e.target.value.length) {
      e.target.value = e.target.id;
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
              onFocus={onClick}
              onBlur={onBlur}
            />
          </div>
        ))
      }
    </div>
  );
};

export default DeviceList;
