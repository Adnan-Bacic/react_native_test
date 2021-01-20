import 'react-native-gesture-handler';
//must be at the very top

import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Props from './components/Props';
import State from './components/State';
import TextInputHandle from './components/TextInputHandle';
import ScrollViewC from './components/ScrollViewC';
import ListViewC from './components/ListViewC';
import FlexBox from './components/FlexBox';
import Touches from './components/Touches';

import Navigation1 from './components/Navigation1';
import Navigation2 from './components/Navigation2';


const Stack = createStackNavigator();

const App = () => {

  return(
    <Fragment>
      <Header></Header>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Navigation1" component={Navigation1}></Stack.Screen>
          <Stack.Screen name="Navigation2" component={Navigation2}></Stack.Screen>
            {/*
            <Props name={"propname goes here"}></Props>
            <Text>---</Text>
            <State></State>
            <Text>---</Text>
            <TextInputHandle></TextInputHandle>
            <Text>---</Text>
            <ScrollViewC></ScrollViewC>
            <Text>---</Text>
            <ListViewC></ListViewC>
            <Text>---</Text>
            
            <FlexBox></FlexBox>
            <Touches></Touches>
            */}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  containerG:{
    flex: 1,
    overflow: 'scroll'
  }
})


export default App;