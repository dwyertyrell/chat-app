import { Button, StyleSheet, Text, TextInput, View } from "react-native";
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
      <Button 
      onPress={() => navigation.navigate('Chat', {name: name})} 
      title='go to Chat-screen'
      ></Button>
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
  }

})

export default Start;