import React from 'react'
import {View, StyleSheet , Text, FlatList } from 'react-native'

const ListScreen = () => {

    const friends = [
        { name : 'Friend #1' /*, key : '1'*/ },
        { name : 'Friend #2' /*, key : '2'*/ },
        { name : 'Friend #3' /*, key : '3'*/ },
        { name : 'Friend #4' /*, key : '4'*/ },
        { name : 'Friend #5' /*, key : '5'*/ },
        { name : 'Friend #6' /*, key : '6'*/ },
        { name : 'Friend #7' /*, key : '7'*/ },
        { name : 'Friend #8' /*, key : '8'*/ },
        { name : 'Friend #9' /*, key : '9'*/ }
    ];

    return  <FlatList 
                    horizontal  // listeyi yatay olarak siralama
                   // showsHorizontalScrollIndicator = {false} // alt scrool bari gileme
                    keyExtractor={friend =>friend.name}
                    data = {friends} 
                    renderItem = { ({ item }) => {
                    return <Text style = {styles.headerStyle}>{item.name}</Text>;
                } } 
            />
};

const styles = StyleSheet.create({
    headerStyle : {
        marginVertical : 20, // iki list arasi bosluk
        fontSize : 30
    }

});

export default ListScreen;