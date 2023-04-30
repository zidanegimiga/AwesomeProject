import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> My Todos </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        paddingTop: 56,
        paddingBottom: 16,
        backgroundColor: 'coral'
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 500,
        color: "white"
    }
})