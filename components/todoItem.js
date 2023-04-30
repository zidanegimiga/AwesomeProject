import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 8
    },
})