import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from './firebase';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName= 'Start'
      >
        <Stack.Screen
          name='Start'
        >
          {props => <Start {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name='Chat'
        >
          {props => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
