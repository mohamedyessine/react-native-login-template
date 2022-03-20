import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function AllCoachScreen({ navigation }) {
    const onCreatePressed = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'RegisterCoachScreen' }],
        })
      }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <View style={styles.container}>
            <TouchableOpacity onPress={onCreatePressed} >
                <Paragraph >Create</Paragraph>
            </TouchableOpacity>
        </View>

        <Paragraph>Display all coaches here</Paragraph>

    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 10 + getStatusBarHeight(),
      right: 4,
    },

  })