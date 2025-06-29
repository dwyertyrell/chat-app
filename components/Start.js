import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import {useState} from 'react'

const Start = ({navigation}) => {
  const [name, setName] = useState('');
  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.textInput}
      placeholder="type name here"
      value={name}
      onChangeText={setName}
      ></TextInput>
      <Text style={styles.text}> name: {name}</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Chat', {name: name})} 
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