import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { collection, getDocs, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";


const Chat = ({route, navigation, db}) => {
  const [messages, setMessages] = useState([]);
  const {name, userID} = route.params

  const onSend = (newMessages) => {

  addDoc(collection(db, 'messages'), newMessages[0]) //saves the passed message to the function in the database.
}

  useEffect(()=>{

    navigation.setOptions({title: name});
  }, [])
  
  useEffect(() => {

 const q = query(collection(db, "messages"), orderBy('createdAt', 'desc') /*where("uid", "==", userID)*/);
    const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
      let newMessages = [];
      documentsSnapshot.forEach(doc => {
        newMessages.push({ 
          id: doc.id, ...doc.data(), 
          createdAt: new Date(doc.data().createdAt.toMillis()) })
      });
      setMessages(newMessages);
    });
    //clean up function 
     return () => {
      if (unsubMessages) unsubMessages();
    }
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
     <KeyboardAvoidingView 
       style={styles.container}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}
     >
        <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={onSend}
      user={{
        _id: userID,
        name: name
      }}
      />
    </KeyboardAvoidingView> 
   
   </View>  
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
export default Chat