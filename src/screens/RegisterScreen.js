
/*
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}*/
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert, Image, KeyboardAvoidingView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { nameValidator } from '../helpers/nameValidator'
import { sizeValidator } from '../helpers/tailleValidator'
import { weightValidator } from '../helpers/poidsValidator'
import { ageValidator } from '../helpers/ageValidator'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'





export default function RegisterScreen({ navigation, route}) {

  const getDetails = (type)=>{
    if(route.params){
       switch(type){
           case "name":
               return route.params.name
           case "size":
              return route.params.size
           case "email":
             return route.params.email
           case "weight":
               return route.params.weight  
           case "picture":
               return  route.params.picture
           case "age":
             return  route.params.age  
          case "sex":
             return  route.params.sex  
       }
    }
    return ""
 }
 


 const [name,setName] = useState(getDetails("name"))
 const [sex,setSex] = useState(getDetails("sex"))
 const [email,setEmail] = useState(getDetails("email"))
 const [age,setAge] = useState(getDetails("age"))
 const [picture,setPicture] = useState(getDetails("picture"))
 const [size,setSize] = useState(getDetails("size"))
 const [weight,setWeight] = useState(getDetails("weight"))


/*

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [size, setSize] = useState({ value: '', error: '' })
  const [weight, setWeight] = useState({ value: '', error: '' })
  const [age, setAge] = useState({ value: '', error: '' })
  const [sex, setSex] = useState({ value: '', error: '' })
  const [picture, setPicture] = useState({ value: '', error: '' })

*/


  

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })


    if (!result.cancelled) {
        let newfile = {
          uri:result.uri,
          type:`test/${result.uri.split(".")[1]}`,
          name:`test.${result.uri.split(".")[1]}`
        }
        handleUpload(newfile)
        }
    else {
            Alert.alert ("you need to give up permissions to work")
    }}
    const handleUpload = (image) =>{
      const result = new FormData()
      result.append('file',image)
      result.append('upload_preset','applicationPFE')
      result.append('cloud_name','applicationsportif')
         
      fetch("https://api.cloudinary.com/v1_1/applicationsportif/image/upload",{
        method:"post",
        body:result
      }).then(res=>res.json())
      .then(result=>{
        setPicture(result.url)
        console.log(result)
      })
    }
   



  const [image1, setImage1] = useState(null);

  const pickImage1 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };
  const handleUpload1 = (image1) =>{
    const result = new FormData()
    result.append('file',image1)
    result.append('upload_preset','applicationPFE')
    result.append('cloud_name','applicationsportif')
       
    fetch("https://api.cloudinary.com/v1_1/applicationsportif/image/upload",{
      method:"post",
      body:result
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
    })
  }
  





 
 const submitData = () => {
    fetch("http://192.168.0.214:5000/ajouter_athlete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify( {
        "name":name.value,
        "email":email.value,
        "size":size.value,
        "age":age.value,
        "weight":weight.value,
        "sex":sex.value,
        picture,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }


    const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const sizeError = sizeValidator(size.value)
    const weightError = weightValidator(weight.value)
    const ageError = ageValidator(age.value)
    const sexError = sexValidator(sex.value)
    const pictureError = sexValidator(picture.value)





    if (emailError ||  nameError || ageError || sizeError || weightError || sexError || pictureError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setSize({ ...size, error: sizeError })
      setWeight({ ...weight, error: weightError })
      setAge({ ...age, error: ageError })
      setSex({ ...sex, error: sexError })
      setPicture({ ...picture, error: picture })

      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePageScreen' }],
    })
  }

  return (
    <ScrollView>
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Create Athlete</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

            <TextInput
        label="Size"
        returnKeyType="next"
        value={size.value}
        onChangeText={(text) => setSize({ value: text, error: '' })}
        error={!!size.error}
        errorText={size.error}
        keyboardType="numeric"

      />
      <TextInput
        label="Weight"
        returnKeyType="done"
        value={weight.value}
        onChangeText={(text) => setWeight({ value: text, error: '' })}
        error={!!weight.error}
        errorText={weight.error}
        keyboardType="numeric"
      />
            <TextInput
        label="Age"
        returnKeyType="done"
        value={age.value}
        onChangeText={(text) => setAge({ value: text, error: '' })}
        error={!!age.error}
        errorText={age.error}
        keyboardType="numeric"
      />
        <TextInput
        label="Sex"
        returnKeyType="next"
        value={sex.value}
        onChangeText={(text) => setSex({ value: text, error: '' })}
        error={!!sex.error}
        errorText={sex.error}
      />
        
       
              
              <Button
                style={styles.inputStyle}
                icon="upload"
                theme={theme}
                mode="contained"
                onPress={ pickImage}>
                  gallery
              </Button>
               <Button
                icon="camera"
                theme={theme}
                mode="contained"
                onPress={pickImage1}>
                  camera
              </Button>

            <Button
                mode="contained"
                onPress={submitData}
                style={{ marginTop: 24 }}
              >
                Create
              </Button>


 
    </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
