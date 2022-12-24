import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, navigate, navigation } from 'react-native';
import CameraScreen from '../CameraScreen/Camera';

  export default function Task() {

    const navigation = useNavigation()

    function handlePress() {
      navigation.navigate('CameraScreen')
    }

    return (
      <View style = {{backgroundColor:"#C0C5C1", marginTop:"5%", width: "80%", margin: "10%", borderRadius: 10}}>
        <Text style = {{textAllign: "center", alignSelf: "center", marginTop: 10}}> Category:</Text>
        
         
        <Text style = {{alignSelf: "center", marginBottom: 10}}>Loading data...</Text>
        
        <View style = {{borderRadius: 10}}> 
          <Button
          onPress={handlePress}
          title="Add Photo"
          color="#3F334D"
          />
        </View>
      </View>
    );
  }

