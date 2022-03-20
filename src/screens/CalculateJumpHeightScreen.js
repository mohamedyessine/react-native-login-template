import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function CalculateJumpHeightScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Refresh
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Get Video
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('')}
      >
        Calculate
      </Button>
      <Paragraph>Value</Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('StatisticScreen')}
      >
        Save
      </Button>
      
    </Background>
  )
}