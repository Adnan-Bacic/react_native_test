import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Navigation2 = ({ navigation }) => {

  return(
    <View style={styles.container}>
        <Text>Navigation2</Text>
        <Button onPress={() => navigation.navigate('Navigation1')} title="Go to nav1"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
    text:{
        color: 'black'
    }
})

export default Navigation2;