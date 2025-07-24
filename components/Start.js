import { TouchableOpacity, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import {useState} from 'react'
import { signInAnonymously } from "firebase/auth";


const Start = ({navigation /*, auth*/}) => {
  const [name, setName] = useState('');

  // const onPress = () => {
  //    navigation.navigate('Chat', {name: name})
  // }

 const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate("Chat", {userID: result.user.uid /*, name: name */ });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      })
  }
  return (
    <View style={styles.container}>

      <TextInput
      style={styles.textInput}
      placeholder="type name here"
      value={name}
      onChangeText={setName}
      ></TextInput>

      <Text 
      style={styles.text}> 
        name: {name}
      </Text>

      <TouchableOpacity 
      accessibilty= {true}
      accessibilityLabel="more options"
      accessibilityHint= "Let's you choose to send an image or geolocation."
      style={styles.button}
      accessibilityRole= "button"
      onPress={signInUser} 
      >
        <Text>go to Chat-screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: 'red'
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    width: '88%'
  },
  button: {
    borderWidth: 1,
    opacity: .5,
    borderRadius: 30,
    backgroundColor: 'teal',
    padding: 10
  }


});

export default Start;