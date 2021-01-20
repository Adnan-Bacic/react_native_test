import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = ({ navigation }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
    },
    text:{
        color: '#fff'
    }
})

export default Header;