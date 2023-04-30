import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addToDo';
import Home from './.expo/screens/home';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Finish up react native tutorial", key: 1 },
    { text: "Laundry", key: 2 },
    { text: "Meet up with friends", key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const submitHandler = (text) => {
    setTodos([
      { text: text, key: Math.random().toString() },
      ...todos
    ])
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Home/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
});
