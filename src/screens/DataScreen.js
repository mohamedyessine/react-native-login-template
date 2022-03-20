import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { tailleValidator } from '../helpers/tailleValidator'
import { poidsValidator } from '../helpers/poidsValidator'



export default function DataScreen({ navigation }) {
  const [taille, setTaille] = useState({ value: '', error: '' })
  const [poids, setPoids] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const tailleError = tailleValidator(taille.value)
    const poidsError = poidsValidator(poids.value)
    if (tailleError || poidsError ) {
        setTaille({ ...taille, error: tailleError })
        setPoids({ ...poids, error: poidsError })
        return
      }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePageScreen' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Please write your data !</Header>
      <TextInput
        label="Taille"
        returnKeyType="next"
        value={taille.value}
        onChangeText={(text) => setTaille({ value: text, error: '' })}
        error={!!taille.error}
        errorText={taille.error}
        keyboardType="numeric"

      />
      <TextInput
        label="Poids"
        returnKeyType="done"
        value={poids.value}
        onChangeText={(text) => setPoids({ value: text, error: '' })}
        error={!!poids.error}
        errorText={poids.error}
        keyboardType="numeric"

      />
      <Button mode="contained" onPress={onLoginPressed}>
        Send
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
