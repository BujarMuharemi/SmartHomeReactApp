import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  var Alert = ReactBootstrap.Alert;

  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
