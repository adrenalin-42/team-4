import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './Camera';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";


const firebaseConfig = {

    apiKey: "AIzaSyDYi_q0Ws01INLTAHLVBR-1IwOuZN69P8k",
    authDomain: "hackathon-2022-edd8b.firebaseapp.com",
    databaseURL: "https://hackathon-2022-edd8b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hackathon-2022-edd8b",
    storageBucket: "hackathon-2022-edd8b.appspot.com",
    messagingSenderId: "346258028438",
    appId: "1:346258028438:web:b5ecba203117eb70260fb7",
    measurementId: "G-Y67GKV9DGZ"
  };
  
  
  
  const FireBaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(FireBaseApp);



const HomeScreen = ({navigation}) => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `User`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    console.log(database);
  return (
    // <Text>database[]</Text>
    <Button
      title="Add Photo"
      onPress={() =>
        navigation.navigate('CameraScreen')
      }
    />
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />                                                                                
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;