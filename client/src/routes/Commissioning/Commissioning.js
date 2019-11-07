import React from 'react';
import QrReader from 'react-qr-reader';
import useDevices from './useDevices';
import DeviceList from '../../components/DeviceList/DeviceList';
import SubmitDevices from '../../components/SubmitDevices/SubmitDevices';
import './Commissioning.css';

const Commissioning = () => {
  const [state, dispatch] = useDevices();

  const handleScan = data => {
    if (data) dispatch({ type: 'add', id: data });
  }

  const editName = e => {
    dispatch({type: 'editName', id: e.target.id, name: e.target.value});
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="commissioning">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ maxWidth: '600px', margin: '20px auto' }}
      />
      <DeviceList devices={state} onChangeName={editName} />
      <SubmitDevices devices={state} />
    </div>
  );
};

export default Commissioning;
