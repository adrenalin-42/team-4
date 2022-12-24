import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import firebase from '../../firebase/config'
import RNFS from 'react-native-fs';


export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);

  // @ts-ignore
  const [type, setType] = useState(Camera.Constants.Type.back);

  // @ts-ignore
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef = useRef(null);

  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;

  const navigation = useNavigation()

    function handlePress() {
      navigation.navigate('MainScreen')
    }


  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      // @ts-ignore
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log({ data });
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function sendPhotoToDB(currentPhoto) {

    const uid = firebase.auth().currentUser.uid;
    // console.log(uid)
  
    const docRef = doc(firebase.firestore(), "users", uid)
    // console.log(uid, '+', firebase.firestore);
    const docSnap = await getDoc(docRef);
  
    console.log(docSnap.data(), '+', currentPhoto);
  
    await updateDoc(doc(firebase.firestore(), "users", uid), {currentPhoto});
  }
  const saveImage = async () => {
    if (image != null) {
      try {

        //   console.log('ABOBA ' + image)

        // // await MediaLibrary.createAssetAsync(image);
        // RNFS.readFile(image, 'base64')
        // .then((data) => {
        //       sendPhotoToDB(data);
        //       // console.log(data)
        // });
            // .then(base64String => {
            //   console.log(base64String + 'ABOBA')
            //   sendPhotoToDB(base64String);
            // })
            // .catch(err => {
            //     console.log("Sourabh____ ImgToBase64 error "+err);
            // })

        
        // alert("Picture saved! 🎉");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
    handlePress();
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
          ratio={"16:9"}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 30,
              paddingRight: 15,
              paddingTop: 50,
            }}
          >
            <Button
              icon={"retweet"}
              onPress={() =>
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                )
              }
            />
            <Button
              icon={"flash"}
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image.uri }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title={"Re-take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <Button title={"Save"} icon="check" onPress={() => saveImage()} />
          </View>
        ) : (
          <Button
            title={"Take a picture"}
            icon="camera"
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});
