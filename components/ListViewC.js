import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';

const ListViewC = () => {

  return(
    <View style={styles.container}>
        <Text>LISTVIEWS:</Text>
        <Text>Flatlist</Text>
        <FlatList data={[
            {key: 'key1'},
            {key: 'key2'},
            {key: 'key3'}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        > 
        </FlatList>
        
        <Text>Sectionlist</Text>
        <SectionList sections={[
            {title: 'A', data: ['a', 'aa', 'aaa']},
            {title: 'B', data: ['b', 'bb', 'bbb']},
        ]}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => index}
        >
        </SectionList>
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

export default ListViewC;