import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db, storage} from './firebase';
import { useNetInfo } from '@react-native-community/netinfo';
import { LogBox, Alert } from 'react-native';
import { useEffect } from 'react';
import { disableNetwork, enableNetwork } from 'firebase/firestore';


const Stack = createNativeStackNavigator();

export default function App() {
  const connectionStatus = useNetInfo()

useEffect(() => {
if(connectionStatus.isConnected === false) {
Alert.alert('connection lost!')
disableNetwork(db); //otherwise, firestore will still attempt to fetch database while offline
} else if(connectionStatus ===true) {
  enableNetwork(db)
}
}, [connectionStatus.isConnected])

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName= 'Start'
      >
        <Stack.Screen
          name='Start'
        >
          {props => <Start {...props} 
          connectionStatus={connectionStatus.isConnected}
          />}
        </Stack.Screen>
        <Stack.Screen
          name='Chat'
        >
          {props => <Chat 
          {...props} 
          db={db} 
          storage={storage}
          connectionStatus={connectionStatus.isConnected}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
