import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import FormInput from './components/Input';

export default function App() {
  const [loaded] = useFonts({
    RobotoBlack: require('./assets/fonts/roboto/Roboto-Black.ttf'),
    RobotoBold: require('./assets/fonts/roboto/Roboto-Bold.ttf'),
    RobotoRegular: require('./assets/fonts/roboto/Roboto-Regular.ttf'),
  });

  // Load fonts before displaying content
  if(!loaded){
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageBody}>
        <Text style={styles.sectionTitle}>Sign Up</Text>
        <View style={styles.signUpFormContainer}>
          <FormInput icon={require('./assets/icons/mail.png')} placeholder={'E-mail'} secure={false}/>
          <FormInput icon={require('./assets/icons/lock.png')} placeholder={'Password'} secure={true}/>
        </View>        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 42,
    backgroundColor: '#EAEAEA',
  },
  pageBody: {
    flex: 0.7,
    borderWidth: 1,
    borderTopLeftRadius: 56,
    borderColor: 'transparent',
    backgroundColor: '#ffffff',
    padding: 24,
    paddingTop: 40
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'RobotoBold',
    color: '#FF9134'
  },
  signUpFormContainer: {
    marginTop: 48
  }
});
