import React, {useState, useEffect, useCallback} from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

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
    <View style={styles.container}>
      <FlatList
        data={qRCodes}
        renderItem={({item}) => (
          <Card title={item.title} containerStyle={styles.cardContainer}>
            <Image style={styles.image} source={{uri: item.code}} />
            <Button
              icon={<Icon name="delete" color="#ffffff" />}
              buttonStyle={styles.button}
              title="DELETE"
            />
          </Card>
        )}
      />
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
});

export default Home;
