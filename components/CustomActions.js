import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native"
import {useActionSheet} from '@expo/react-native-action-sheet'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'



const CustomActions = ({wrapperStyle, iconTextStyle, onSend, storage, userID}) => {
 
  const actionSheet = useActionSheet()

  const generateReference = (uri) => {
    const timeStamp=(new Date()).getTime()
    const imageName = uri.split('/')[uri.split('/').length -1]

    return `${userID}-${timeStamp}-${imageName}`
  }
  const uploadAndSendImage = async(imageURI) => {
    const uniqueRefString = generateReference(imageURI)
    const newUploadRef = ref(storage, uniqueRefString) 
    const response = await fetch(imageURI)
    const blob = await response.blob()
    uploadBytes(newUploadRef, blob).then(async (snapshot) => {
          console.log('file has been uploaded successfully')
          const imageURL = await getDownloadURL(snapshot.ref)
          onSend([{
            _id: Math.random().toString(36).substring(7),
            createdAt: new Date(),
            text: '',
            image:imageURL}]) //now when image is picked from library, not only it will be uploaded to cloud storage, but will also be sent as a message on chat screen
        })
  }

  const onActionPress = () => {
    const options = ['choose from library', 'take picture', 'send location', 'cancel']
    const cancelButtonIndex = options.length -1 
    actionSheet.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      }
    ,
    async (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          pickImage(); // console.log('pickImage callback will be called')
          return;
        case 1:
          takePhoto(); //console.log('takePhoto callback will be called')
          return;
        case 2:
          getLocation();//console.log('getLocation callback will be called')
        default:
      }
    })
  }

   const getLocation = async () => {
    let permissions = await Location.requestForegroundPermissionsAsync()

    if(permissions?.granted) {
      const location  = await Location.getCurrentPositionAsync({})

      if(location) {
        onSend([{
          _id: Math.random().toString(36).substring(7),
          createdAt: new Date(),
          text: '',
          location: {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          }
        }])
      }else Alert.alert('error occured while fetching location')
    }else Alert.alert('permission haven\'t been granted')
  }

  const takePhoto = async() => {
    let permissions = await ImagePicker.requestCameraPermissionsAsync()

    if(permissions?.granted) {
      const result = await ImagePicker.launchCameraAsync()

      if(!result.canceled) {
        uploadAndSendImage(result.assets[0].uri)
      }
    } else {
      Alert.alert('camera\s permissions haven\'t been granted')
    }
  }


  const pickImage = async() => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(permissions?.granted) {
      const result = await ImagePicker.launchImageLibraryAsync()
      
      if(!result.canceled){
       uploadAndSendImage(result.assets[0].uri)
      }
    }else {
      Alert.alert('permissions to access Phone library has been denied')
    }
  }
  return (
    <TouchableOpacity style ={styles.container} onPress={onActionPress}>
      <View style= {[styles.wrapper, wrapperStyle]} >
        <Text style= {[styles.iconText, iconTextStyle]}> + </Text>
      </View>
    </TouchableOpacity>
    
  )

}

  const styles = StyleSheet.create({
    container: {
      width: 26,
      height: 26,
      marginLeft: 10,
      marginBottom: 10,
    },
    wrapper: {
      borderRadius: 13,
      borderColor: '#b2b2b2',
      borderWidth: 2,
      flex: 1,
    },
    iconText: {
      color: '#b2b2b2',
      fontWeight: 'bold',
      fontSize: 10,
      backgroundColor: 'transparent',
      textAlign: 'center',
    },
  })
export default CustomActions