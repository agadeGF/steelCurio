import React from 'react';
import QrReader from 'react-qr-reader';
import useDevices from '../../hooks/useDevices';
import DeviceList from '../../components/DeviceList/DeviceList';
import './Commissioning.css';

const Commissioning = () => {
  const [state, dispatch] = useDevices();

  const handleScan = data => {
    if (data) dispatch({ type: 'add', id: data });
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
      <DeviceList devices={state} />
    </div>
  );
};

export default Commissioning;
