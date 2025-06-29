import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";


const Chat = ({route, navigation}) => {
  const [messages, setMessages] = useState([]);
  const {name} = route.params
  const onSend = (newMessages) => {
    setMessages((previousMessage)=> {
      GiftedChat.append(previousMessage, newMessages)
    })
  }

  useEffect(()=>{

    navigation.setOptions({title: name});
  }, [])
  
  useEffect(() => {

    setMessages([
      {
        id: 1,
        text: 'hello developer',
        createdAt: new Date,
        user: {
          id: 2,
          name: 'tyrell dwyer',
          avatar: 'https://placeholder.com'
        },
      }
    ])

  }, [])
  return (
      // <View style={styles.container}>
      //   <Text>{name}</Text>
      // </View>
      
      // this componenet came from the imported module, along with its own props
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        id:1
      }}
    />
    )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  }
})
export default Chat