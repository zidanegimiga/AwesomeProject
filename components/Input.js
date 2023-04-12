import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Input } from '@rneui/themed';
import { useFonts } from 'expo-font';

export default function FormInput({icon, placeholder, type, secure}) {
  const [loaded] = useFonts({
    RobotoBlack: require('../assets/fonts/roboto/Roboto-Black.ttf'),
    RobotoBold: require('../assets/fonts/roboto/Roboto-Bold.ttf'),
    RobotoRegular: require('../assets/fonts/roboto/Roboto-Regular.ttf'),
  });

  if(!loaded){
    return null
  }

  return (
    <View style={styles.container}>
        <Image source={icon} style={styles.icon}/>
        <TextInput
            placeholder={placeholder}
            secureTextEntry={secure}
            style={styles.textInput}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F7FB',
    width: "100%",
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 4,
    marginTop: 24
  },
  icon:{ 
    width: 40, 
    height: 40,
    resizeMode: 'contain' 
  },
  textInput: {
    marginLeft: 8,
    fontSize: 14,
    color: '#262626',
    width: '100%',
  }
});
