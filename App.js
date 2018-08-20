
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground} from 'react-native';
import Button from '../prototype/src/components/Button';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.imageStyle} source={require('../prototype/src/images/food.jpg')} />
          <Text style={styles.textStyle}>Are you an</Text>
          <Text style={styles.textStyle}>Amateur Cook</Text>
          <Text style={styles.textStyle}>or</Text>
          <Text style={styles.textStyle}>Foodie</Text>
          <ImageBackground style={styles.imageStyle} source={require('../prototype/src/images/restaurant.jpg')}>
              <Button>
                  Next
              </Button>
          </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8351',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily:'Helvetica',
    color: '#0c59cf'
  },
  imageStyle: {
      flex: 1,
      width:'100%'
  }

});
