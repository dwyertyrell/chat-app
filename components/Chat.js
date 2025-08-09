import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from "react-native"
import { useEffect, useState } from "react"
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat"
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"
import CustomActions from './CustomActions'
import MapView from "react-native-maps"

const Chat = ({route, navigation, db, storage, connectionStatus}) => {
  const [messages, setMessages] = useState([])
  const {name, userID} = route.params

  const onSend = (newMessages) => {
    const message = {
      ...newMessages[0],
        _id: Math.random().toString(36).substring(7),
        createdAt: new Date(),
        user: {
          _id: userID,
          name: name
        }
    }
    setMessages(message)
  addDoc(collection(db, 'messages'), newMessages[0]) //saves the passed message to the function in the database.
  .then(() => {
    console.log('message saved successfully')
  })
  .catch((err) => {
    console.error('Error while saving message', err)
  })
}

  useEffect(()=>{

    navigation.setOptions({title: name})
  }, [])

    let unsubMessages // declare here, or it will not be visible to the useEffect() clean-up

  useEffect(() => {

  if(connectionStatus === true) { //limits unsubMessages` to this if() block
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
  }, [connectionStatus])

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
/* passing these render functions into <GiftedChat/> to customize its rendering */
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
    if(connectionStatus === false) {
      return null //don't render the inputToolBar of the <GiftedChat/>
    }else return <InputToolbar {...props}/> //render InputToolBar as usual
  }

  const renderCustomActions = (props) => {
    return <CustomActions 
    onSend = {onSend} 
    storage={storage}
    userID={userID}
    {...props}/>
  }

  const renderCustomView = (props) => {
    const {currentMessage} = props

    if(currentMessage.location) {
      return (
        <MapView
          style={{width: 150, height:100, borderRadius: 13, margin:13}}
          region={{
              latitude: currentMessage.location.latitude,
              longitude: currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}/> 
      )
    }
    return null

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
      renderActions ={renderCustomActions}
      renderCustomView={renderCustomView}
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