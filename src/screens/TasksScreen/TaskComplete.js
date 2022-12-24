import React from 'react';
import { View, Text, Button, Image } from 'react-native';

  export default function Task_Complete() {

    return (
      <View>
       <Image style = {{marginLeft:"25%", marginTop:"10%", width:"50%", height:"30%"}} source = {require("../MainScreen/outdoor-party-concept-illustration_114360-4706.webp")} />
      <View style = {{backgroundColor:"#C0C5C1", marginTop:"5%", width: "80%", margin: "10%", borderRadius: 10}}>

        <Text style = {{alignSelf: "center", marginTop: 10}}> Category:</Text>


        <Text style = {{alignSelf: "center", marginBottom: 10}}>Loading data...</Text>

        <View style = {{borderRadius: 10}}> 
          <Button
          // onPress={}
          title="See Feed"
          color="#3F334D"
          />
        </View>
      </View>
      </View>
    );
  }

