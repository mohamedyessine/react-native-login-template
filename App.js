import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import DataScreen from './src/screens/DataScreen'
import HomePageScreen from './src/screens/HomePageScreen'
import StatisticScreen from './src/screens/StatisticScreen'
import CalculateJumpHeightScreen from './src/screens/CalculateJumpHeightScreen'
import CalculateJumpWidthScreen from './src/screens/CalculateJumpWidthScreen'
import CalculateSpeedScreen from './src/screens/CalculateSpeedScreen'
import JumpWidthValueScreen from './src/screens/JumpWidthValueScreen'
import AllUsersScreen from './src/screens/AllUsersScreen'
import AllCoachScreen from './src/screens/AllCoachScreen'
import RegisterCoachScreen from './src/screens/RegisterCoachScreen'
import ProfilScreen from './src/screens/ProfilScreen'

import AllCoachesComponent from './src/screens/AllCoachesScreen'

const Stack = createStackNavigator()




export default function App() {

  return (

    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllCoachesComponent"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="DataScreen" component={DataScreen} />
          <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
          <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
          <Stack.Screen name="CalculateJumpHeightScreen" component={CalculateJumpHeightScreen} />
          <Stack.Screen name="CalculateJumpWidthScreen" component={CalculateJumpWidthScreen} />
          <Stack.Screen name="CalculateSpeedScreen" component={CalculateSpeedScreen} />
          <Stack.Screen name="JumpWidthValueScreen" component={JumpWidthValueScreen} />
          <Stack.Screen name="AllUsersScreen" component={AllUsersScreen} />
          <Stack.Screen name="AllCoachScreen" component={AllCoachScreen} />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
          <Stack.Screen name="AllCoachesComponent" component={AllCoachesComponent} />

          <Stack.Screen name="RegisterCoachScreen" component={RegisterCoachScreen} />


          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}