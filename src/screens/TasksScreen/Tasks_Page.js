import { Text, View, ScrollView, Button} from 'react-native';
import Task from "./Task"
import { useNavigation } from '@react-navigation/native';
import React, { useState} from "react"
import { doc, getDoc } from "firebase/firestore";
import firebase from '../../../src/firebase/config';
import { set } from 'firebase/database';



 export default function Tasks_Page() {
  
  let arrVals = []
  // let view  Vars = [] 
  const [stateViewVars, setViewVars] = useState([])

  const navigation = useNavigation()

    function handlePress() {
      navigation.navigate('CameraScreen')
    }

  const getCategories = async () => {

    const uid = firebase.auth().currentUser.uid;
    const db = firebase.firestore()
    const docRef = doc(db, "users", uid);
    // const docRef2 = doc(db, "dailyTask", "1");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()["ourData"]

    

    let viewVars = []

    if (docSnap.exists()) {
      let i = 0
      for (let entry in data) {



        const docRef2 = doc(firebase.firestore(), "daily_task", data[entry]["photo"] + '');
        const docSnap2 = await getDoc(docRef2);
        const data2 = docSnap2.data()["task"]

        // console.log("heere2", docRef2)

          // console.log("abs" + data[entry]["photo"])
          if (!arrVals.includes(data[entry]["photo"]))
            arrVals.push(data[entry]["photo"])


            
            viewVars.push(
              <View key = {i}>
                <View style = {{backgroundColor:"#C0C5C1", marginTop:"5%", width: "80%", margin: "10%", borderRadius: 10}}>
                <Text style = {{textAllign: "center", alignSelf: "center", marginTop: 10}}> Category: {data[entry]["name"]}</Text>
                
                
                <Text style = {{alignSelf: "center", marginBottom: 10}}>{data2}</Text>
                
                <View style = {{borderRadius: 10}}> 
                  <Button
                  onPress={handlePress}
                  title="Add Photo"
                  color="#3F334D"
                  />
                </View>
                </View>
              </View>
              
            )
            i += 1
      }
      setViewVars(viewVars)
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
    }

    // return (tmp);
  }

  const tmp = async () => {

    await getCategories();

    for (let i in arrVals) {
      const docRef = doc(firebase.firestore(), "daily_task", i);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        // console.log("Document data din catogories:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
    }
    }
    
  }

  tmp();


  // console.log('aici', viewVars)
  return (
    <View  style={{backgroundColor:"#574B60", height: "100%"}}>
      <Text style={{margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    padding: 8}}>
            Your activities for today:
      </Text>
      <View>
          { stateViewVars }
        {/* <Task />
        <Task />
        <Task /> */}

    </View >
    </View>
  );
}