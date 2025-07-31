import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from "react-native"
import { useEffect, useState } from "react"
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat"
import { collection, getDocs, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Chat = ({route, navigation, db, isConnected}) => {
  const [messages, setMessages] = useState([])
  const {name, userID} = route.params

  const onSend = (newMessages) => {
  addDoc(collection(db, 'messages'), newMessages[0]) //saves the passed message to the function in the database.
}

  useEffect(()=>{

    navigation.setOptions({title: name})
  }, [])

    let unsubMessages // declare here, or it will not be visible to the useEffect() clean-up

  useEffect(() => {

  if(isConnected === true) { //limits unsubMessages` to this if() block
     if (unsubMessages) unsubMessages();
      unsubMessages = null;
    const q = query(collection(db, "messages"), orderBy('createdAt', 'desc') /*where("uid", "==", userID)*/)
        
    unsubMessages = onSnapshot(q, (documentsSnapshot) => { 
          let newMessages = []
          documentsSnapshot.forEach(doc => {
            newMessages.push({ 
              id: doc.id, ...doc.data(), 
              createdAt: new Date(doc.data().createdAt.toMillis()) })
          })
          cacheMessages(newMessages)
          setMessages(newMessages) 
        })
        //clean up function 
        return () => {
          if (unsubMessages) unsubMessages()
        }
      }else loadCachedMessages()
  }, [isConnected])

  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem('messages') || []
    setMessages(JSON.parse(cachedMessages))
  }

  const cacheMessages = async (messagesToCache) => {
    try{
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache))
    } catch (error){
      console.log(error.message)
    }
  }

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props} //this function is inheriting the props of <GiftedChat/>.
        wrapperStyle ={ {
          right: {backgroundColor: '#000'},
          left: {backgroundColor: '#FFF'}
        }}
      />
    )
  }

  const renderOnSend = (props) => {
    if(isConnected === false) {
      return null //don't render the inputToolBar of the <GiftedChat/>
    }else return <InputToolbar {...props}/> //render InputToolBar as usual
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
      renderOnSend={renderOnSend}
      onSend={onSend}
      user={{
        _id: userID,
        name: name
      }}
      />
    </KeyboardAvoidingView> 
   
   </View>  
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
export default Chat