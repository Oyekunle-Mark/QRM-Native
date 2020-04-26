import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';

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

  useEffect(() => {
    getQRCodes();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
