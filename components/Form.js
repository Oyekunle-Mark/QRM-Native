import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {Card, Button, Icon, Input} from 'react-native-elements';

const CodeForm = () => {
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
    )
}
