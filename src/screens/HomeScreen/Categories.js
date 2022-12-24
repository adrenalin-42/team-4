import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Button, Alert,StyleSheet } from 'react-native';
import "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import firebase from '../../firebase/config'
import {useNavigation} from '@react-navigation/native';


const categories = [
  {
    name: 'Family time',
    photo: require('../../../assets/Family_time.jpg'),
  },
  {
    name: 'Healthy diet',
    photo: require('../../../assets/Healthy_diet.jpg'),
  },
  {
    name: 'New language',
    photo: require('../../../assets/New_language.jpg'),
  },
  {
    name: 'Time with friends',
    photo: require('../../../assets/Freinds.jpg'),
  },
  {
      name: 'Sport',
      photo: require('../../../assets/Sport.jpg'),
  },
  {
      name: 'Tidy up',
      photo: require('../../../assets/Tidy_up.jpg'),
  },
];


function CategoryList(props) {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          // if (this.state.clicked) return; 
          props.onCategorySelect(item)} }>
          <View style={styles.container}>
            <Image style={{height: 150, width: 150}} source={item.photo} />
            <Text style={{fontSize: 20}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.name}
    />
  );
}

function sendList(selectedCategories) {
  const Categories = selectedCategories.map(x=>x.name)
  console.log(Categories,selectedCategories);
  const body = JSON.stringify(Categories);
  
  writeNewPost(selectedCategories);
    // .then(response => response.json())
    // .then(data => {
    //   Alert.alert('Success', 'The list was sent successfully');
    // })
    // .catch(error => {
    //   Alert.alert('Error', 'There was an error sending the list');
    // });
}

async function writeNewPost(ourData) {

  const uid = firebase.auth().currentUser.uid;
  // console.log(uid)

  const docRef = doc(firebase.firestore(), "users", uid)
  // console.log(uid, '+', firebase.firestore);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.data(), '+', ourData);

  await updateDoc(doc(firebase.firestore(), "users", uid), {ourData});
}

export default function Default() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleCategorySelect(category) {
    setSelectedCategories([...selectedCategories, category]);
  }
  
  const navigation = useNavigation();

  return (
    <View style={{ margin: 30}} >
      <CategoryList onCategorySelect={handleCategorySelect} />
     <Button color = "#C0C5C1" style={{position: 'fixed'}} onPress={()=>
      [sendList(selectedCategories), navigation.navigate('TasksScreen')]} title="Send List"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    paddingTop: 20, 
    backgroundColor: "#C0C5C1",
    height: 200,
    width: 200
  },
});