import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Props = (props) => {

  return(
    <View style={styles.container}>
        <Text>Props</Text>
      <Text style={styles.text}>{props.name}</Text>
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

export default Props;