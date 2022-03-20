import React from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper'
import { MaterialIcons,Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
const ProfilScreen = (props)=>{

   const {name,picture,sex,weight,email,size,age} = props
   const deleteEmploye = ()=>{
       fetch("http://192.168.0.214:5000/delete/:id",{
           method:"delete",
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
             
           })
       })
       .then(res=>res.json())
       .then(deletedEmp=>{
           Alert.alert(`${deletedEmp.name} deleted`)
           props.navigation.navigate("AllUserScreen")
       })
       .catch(err=>{
        Alert.alert("someting went wrong")
       })
   }
  
  return (
      <View style={styles.root}>
        <LinearGradient
         colors={["#0033ff","#6bc1ff"]}
         style={{height:"20%"}}
         />
         <View style={{alignItems:"center"}}>
             <Image
            style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
            source={{uri:picture}}
            /> 
         </View>
        
         <Card style={styles.mycard} onPress={()=>{
             Linking.openURL(`mailto:${email}`)
         }}>
            <View style={styles.cardContent}>
              <MaterialIcons name="email" size={32} color="#006aff" />
              <Text style={styles.mytext}>{email}</Text>
            </View>
         </Card>
         
         <Card style={styles.mycard}>
            <View style={styles.cardContent}>
              <MaterialCommunityIcons name="weight-lifter" size={32} color="#006aff" />
              <Text style={styles.mytext}>{weight}</Text>
            </View>
         </Card>
         
         <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Button 
             icon="account-edit"
             mode="contained"
             theme={theme}
              onPress={() => {
                 props.navigation.navigate("Create",
                 {name,picture,sex,weight,email,age,size}
                 ) 
              }}>
                Edit
            </Button>
           
         </View>
        

      </View>
  )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
})
export default ProfilScreen