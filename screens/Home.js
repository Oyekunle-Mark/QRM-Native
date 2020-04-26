import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';

import CodeForm from '../components/Form';
import QRCodes from '../components/QRCodes';

const URL = 'http://localhost:3000/api/v1/codes';

const Home = () => {
  const [qRCodes, setQRCodes] = useState([]);

  const getQRCodes = useCallback(async () => {
    const response = await fetch(URL);
    const qrs = await response.json();

    if (response.ok) {
      setQRCodes(qrs.data);
    }
  }, []);

  const createQRCode = useCallback(async data => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({dataString: data}),
    });

    const qr = await response.json();

    if (response.ok) {
      setQRCodes(qr.data);
    }
  }, []);

  const deleteQRCode = useCallback(async id => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'delete',
    });
    const qrs = await response.json();

    if (response.ok) {
      setQRCodes(qrs.data);
    }
  }, []);

  useEffect(() => {
    getQRCodes();
  }, []);

  return (
    <View style={styles.container}>
      <CodeForm createQRCode={createQRCode} />
      <QRCodes qRCodes={qRCodes} deleteQRCode={deleteQRCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default Home;
