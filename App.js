// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Dashboard from './components/dashboard';
import MainScreen from './src/screens/MainScreen/MainScreen'
import TasksScreen from './src/screens/TasksScreen/Tasks_Page'
import CameraScreen from './src/screens/CameraScreen/Camera';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="HomeScreen" 
       component={HomeScreen} 
       options={
         { title: 'HomeScreen' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="MainScreen" 
       component={MainScreen} 
       options={
         { title: 'MainScreen' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="TasksScreen" 
       component={TasksScreen} 
       options={
         { title: 'TasksScreen' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}