import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";


const Chat = ({route, navigation}) => {
  const [messages, setMessages] = useState([]);
  const {name} = route.params

  const onSend = (newMessages) => {
  setMessages((previousMessage) => {
    return GiftedChat.append(previousMessage, newMessages)
  })
}

  useEffect(()=>{

    navigation.setOptions({title: name});
  }, [])
  
  useEffect(() => {

    setMessages([
      {
        _id: 1,
        text: 'hello developer',
        createdAt: new Date,
        user: {
          _id: 2,
          name: 'tyrell dwyer',
          avatar: 'https://placeholder.com'
        },
      },
      {
        _id: 2,
        text: 'this is a system message',
        createdAt: new Date(),
        system: true
      }
    ])

  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props} //this function is inheriting the props.
        wrapperStyle ={ {
          right: {backgroundColor: '#000'},
          left: {backgroundColor: '#FFF'}
        }}
      />
    )
  }

  return (
   <View style= {styles.container}>

   { Platform.OS === 'ios' ? (

    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-50}>
      <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={onSend}
      user={{
        _id: 1
      }}
      />
    </KeyboardAvoidingView> 
    )
    : (
      <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={onSend}
      user={{
        _id: 1
      }}
      />
   )}  

   </View>  
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
export default Chat