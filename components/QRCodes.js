import React from 'react';
import {Text, Image, FlatList, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const QRCodes = ({qRCodes, deleteQRCode}) =>
  qRCodes.length ? (
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
  );

const styles = StyleSheet.create({
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

export default QRCodes;
