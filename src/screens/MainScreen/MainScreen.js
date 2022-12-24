import {Text, View, Image, ScrollView} from "react-native"

export default function MainScreen(){
  return(
    
    <ScrollView style = {{backgroundColor : "#DFE2E2"}}>
   
    <Image style = {{marginTop : "10%", marginLeft:"2%", height: "4%", width : " 10%"}} source ={require("./friends.png")} /> 
    
    <View style = {{marginLeft: "10%", marginTop:"5%", marginRight:"10%",  backgroundColor : "#C0C5C1", flexDirection:'row', flexWrap:'wrap'}}>

      <Text style = {{marginLeft: "20%", marginTop: "5%", fontSize: 18, fontWeight:"bold"}}>Karl</Text>
      <Text style = {{marginLeft: "20%", marginTop: "10%"}}> Category:  </Text>
      <Image style = {{ marginLeft: "5%", width: "40%", height: 100, marginBottom: "10%"}} source = {require("./outdoor-party-concept-illustration_114360-4706.webp")} /> 
       <Text style = {{marginLeft: "5%"}}> Task:  </Text>
     </View>

     <View style = {{ marginTop:"5%",  flexDirection:'row', flexWrap:'wrap'}}>
        <Text style = {{marginLeft: "25%", marginTop: "5%", fontSize: 18, fontWeight:"bold"}}>Andreea</Text>
      
      <Image style = {{marginLeft: "10%", alignSelf : "center", width: "80%", height: 300, marginBottom: "10%"}} source = {require("./outdoor-party-concept-illustration_114360-4706.webp")} /> 
      <Text  style={{marginLeft:"40%"}}> Description </Text>
      <Text  style={{marginLeft:"35%", fontStyle : "italic"}}> See Comentaries </Text>
     </View>

      <View style = {{ marginTop:"5%", marginBottom:"30%",  flexDirection:'row', flexWrap:'wrap'}}>
        <Text style = {{marginLeft: "25%", marginTop: "5%", fontSize: 18, fontWeight:"bold"}}>Roman</Text>
      
      <Image style = {{marginLeft: "10%", alignSelf : "center", width: "80%", height: 300, marginBottom: "10%"}} source = {require("./360_F_300330755_t9672jb5qy7gRtKWQg9jvILrkvKSH3m0.jpg")} /> 
      <Text  style={{marginLeft:"40%"}}> Description </Text>
      <Text  style={{marginLeft:"35%", fontStyle : "italic"}}> See Comentaries </Text>
     </View>
      
     </ScrollView>
  )
} 