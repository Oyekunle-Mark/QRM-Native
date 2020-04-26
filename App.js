/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import Home from './screens/Home';

const App = () => (
  <View style={styles.body}>
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    paddingBottom: 400,
  },
});

export default App;
