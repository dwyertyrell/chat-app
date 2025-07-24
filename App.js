import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // <-- CHANGE HERE!

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // <-- NEW IMPORT!

const Stack = createNativeStackNavigator();

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAH2zD62rjsghuJ2vnOF4nzooUl-osS5sg",
    authDomain: "chat-app-a12bb.firebaseapp.com",
    projectId: "chat-app-a12bb",
    storageBucket: "chat-app-a12bb.firebasestorage.app",
    messagingSenderId: "789584008757",
    appId: "1:789584008757:web:fe3e7818039fbecf87837c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // Initialize Firebase Auth with React Native persistence!
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName= 'Start'
      >
        <Stack.Screen
          name='Start'
        >
          {props => <Start {...props} auth={auth} />}
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


// import Start from './components/Start';
// import Chat from './components/Chat';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { initializeApp } from "firebase/app";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 

// const Stack = createNativeStackNavigator();

// export default function App() {
  
//   const firebaseConfig = {
//   apiKey: "AIzaSyAH2zD62rjsghuJ2vnOF4nzooUl-osS5sg",
//   authDomain: "chat-app-a12bb.firebaseapp.com",
//   projectId: "chat-app-a12bb",
//   storageBucket: "chat-app-a12bb.firebasestorage.app",
//   messagingSenderId: "789584008757",
//   appId: "1:789584008757:web:fe3e7818039fbecf87837c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

//  // Initialize Firebase Auth with React Native persistence!
//   const auth = initializeAuth(app, { // <-- CHANGE HERE!
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//   });

//   return (
//     <NavigationContainer >
//       <Stack.Navigator
//       initialRouteName= 'Start'
//       >
        
//         <Stack.Screen
//         name='Start'
//         // component={Start}
//         >
//           {props => <Start {...props} auth={auth} />}
//         </Stack.Screen>
//         <Stack.Screen
//         name='Chat'
//         >
//           {props => <Chat {...props} db={db} />}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }