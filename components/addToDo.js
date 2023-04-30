import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("")
    const changeHandler = (val) => {
        setText(val)
    }
    const addTodo = (text) => {
        if(text.length > 0){
            submitHandler(text);
            setText("")
        } else{
            Alert.alert('Ooops!', 'Empty text not allowed', [
                {text: 'Understood', onPress: ()=> console.log('Alert closed')}
            ])
        }
    }

    return (
        <View>
            <TextInput
                onChangeText={changeHandler}
                style={styles.input}
                placeholder='Enter todo...'
            />
            <Button
                title="Add Item"
                color="coral"
                onPress={() => addTodo(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: "#ddd",
        borderBottomWidth: 2
    }
})