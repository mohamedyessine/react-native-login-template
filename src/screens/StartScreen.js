import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'




export default function StartScreen({ navigation }) {
  
  return (
    <Background>
      <Logo />
      <Header>CrossTest</Header>
      <Paragraph>
        The easiest way to make physical tests.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterCoachScreen')}
      >
        Create coach
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('image')}
      >
        All coaches
      </Button>
    </Background>


  )
}
