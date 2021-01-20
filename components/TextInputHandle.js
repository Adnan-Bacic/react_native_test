import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const TextInputHandle = () => {

  const [text, setText] = useState('');

  
  const inputOnChange = (text) => {
    setText(text);
  }
  

  return(
    <View style={styles.container}>
        <Text>Textinput</Text>
      <TextInput onChangeText={inputOnChange} defaultValue={text} style={styles.textInput}></TextInput>
      <Text>
      {text.split(' ').map((word) => word && 'output text').join(' ')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
    text:{
        color: 'black'
    },
    textInput:{
      borderColor: 'black',
      borderWidth: 1
    }
})

export default TextInputHandle;