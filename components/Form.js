import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';

const CodeForm = ({createQRCode}) => {
  const [codeInput, setCodeInput] = useState('');

  return (
    <View>
      <Input
        placeholder="Enter text to be encoded"
        inputContainerStyle={styles.input}
        onChangeText={text => setCodeInput(text)}
        defaultValue={codeInput}
      />
      <Button
        icon={
          <Icon
            name="qrcode"
            type="font-awesome"
            color="#ffffff"
            iconStyle={styles.icon}
          />
        }
        iconRight
        title="Generate QR Code"
        type="solid"
        buttonStyle={styles.submit}
        onPress={() => {
          createQRCode(codeInput);
        }}
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
  input: {
    margin: 10,
  },
  submit: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
  emptyTextMessage: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default CodeForm;
