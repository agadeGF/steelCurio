import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const JodusNodus = () => {
  const [result, setResult] = useState('No result');

  const handleScan = data => {
    if (data) setResult(data);
  }

  const handleError = err => {
    console.error(err)
  }
  
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ maxWidth: '600px', margin: '20px auto' }}
      />
      <p>{result}</p>
    </div>
  );
};

export default JodusNodus;
