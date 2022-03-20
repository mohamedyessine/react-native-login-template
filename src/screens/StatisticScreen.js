import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

export default function StatisticScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>View Statistics</Header>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Jump Statistic
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Running Speed Statistics
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        One-Rep-Max
      </Button>
      
    </Background>
  )
}