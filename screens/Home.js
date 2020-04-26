import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

import CodeForm from '../components/Form';

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

      {qRCodes.length ? (
        <FlatList
          data={qRCodes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card title={item.title} containerStyle={styles.cardContainer}>
              <Image style={styles.image} source={{uri: item.code}} />
              <Button
                icon={
                  <Icon name="delete" color="#ffffff" iconStyle={styles.icon} />
                }
                buttonStyle={styles.button}
                title="DELETE"
                onPress={() => {
                  deleteQRCode(item.id);
                }}
              />
            </Card>
          )}
        />
      ) : (
        <Text style={styles.emptyTextMessage}>
          No QR Codes yet. Create one now.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  button: {
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  image: {
    width: 300,
    height: 300,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  emptyTextMessage: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Home;
