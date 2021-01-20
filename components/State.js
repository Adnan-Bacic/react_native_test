import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const State = () => {

    const [isSunny, setIsSunny] = useState(true);

    const changeCondition = () => {
        if(isSunny == true){
            setIsSunny(false);
        } else {
            setIsSunny(true);
        }
    }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>State</Text>
        <Text>Is it sunny: {isSunny ? "True" : "False"}</Text>
      <Button onPress={changeCondition} title="Click"></Button>
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

export default State;