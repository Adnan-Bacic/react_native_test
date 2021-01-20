import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Navigation1 = ({ navigation }) => {

  return(
    <View style={styles.container}>
        <Text>Navigation1</Text>
        <Button onPress={() => navigation.navigate('Navigation2')} title="Go to nav2"></Button>
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

export default Navigation1;