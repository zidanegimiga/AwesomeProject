import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

export default function Sandbox({ submitHandler }) {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        flex: 1,
        flexDirection: "row"
    },
    boxOne: {
        backgroundColor: "violet",
        paddingTop: 48,
        paddingHorizontal: 10,
        flex: 1
    },
    boxTwo: {
        backgroundColor: "gold",
        paddingTop: 48,
        paddingHorizontal: 10,
        flex: 2
    },
    boxThree: {
        backgroundColor: "coral",
        paddingTop: 48,
        paddingHorizontal: 10,
        flex: 3
    },
    boxFour: {
        backgroundColor: "skyblue",
        paddingTop: 48,
        paddingHorizontal: 10,
        flex: 4
    },
})