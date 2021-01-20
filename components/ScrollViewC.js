import React from 'react';
import { View, Fragment, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ScrollViewC = () => {
  
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

  return(
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text>Scrollview</Text>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
        <Image source={logo}></Image>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    scroll:{
      flex: 1,
    },
    text:{
        color: 'black'
    }
})

export default ScrollViewC;