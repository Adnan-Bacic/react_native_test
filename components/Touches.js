import React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';

const Touches = () => {

    const buttonOnpress = () => {
        alert('Button clicked');
    }

  return(
    <View style={styles.container}>
        <Text>Touches</Text>
      <Button onPress={buttonOnpress} title="Button"></Button>
      <TouchableHighlight onPress={buttonOnpress}>
          <View>
              <Text>TouchableHighlight button</Text>
          </View>
      </TouchableHighlight>
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

export default Touches;