import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBox = () => {

  return(
    <View style={styles.container}>
        <View style={styles.red}></View>
        <View style={styles.green}></View>
        <View style={styles.blue}></View>
        <View style={styles.yellow}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    text:{
        color: 'black'
    },
    red:{
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    green:{
        flex: 2,
        backgroundColor: 'green',
        padding: 10
    },
    blue:{
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    },
    yellow:{
        flex: 2,
        backgroundColor: 'yellow',
        padding: 10
    }
})

export default FlexBox;