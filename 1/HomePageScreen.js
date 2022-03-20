
import Background from '../components/Background'
import Button from '../components/Button'
import BackButton from '../components/BackButton'



import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/profile.png';
// Tab ICons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';




export default function HomePageScreen({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Profil");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    
    
      <SafeAreaView style={styles.container}>

<View style={{ justifyContent: 'flex-start', padding: 70 }}>
  <Image source={profile} style={{
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8
  }}></Image>

  <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20
  }}>reyejko</Text>

  <TouchableOpacity>
    <Text style={{
      marginTop: 6,
      color: 'white'
    }}>Edit Profile</Text>
  </TouchableOpacity>

  <View style={{ flexGrow: 1, marginTop: 50 }}>
    {
      // Tab Bar Buttons....
    }

    <TouchableOpacity onPress={() => navigation.navigate('AllCoachScreen')}>
    <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,

        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>
              <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color : 'white'
          
        }}>All Coaches</Text>

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('AllUsersScreen')}>
    <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,

        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>
              <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color : 'white'
          
        }}>All Users</Text>

    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('StatisticScreen')}>
    <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,

        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>
              <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color : 'white'
          
        }}>Statistics</Text>

    </View>
    </TouchableOpacity>



  </View>
</View>



<Animated.View style={{
  flexGrow: 1,
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  paddingHorizontal: 15,
  paddingVertical: 20,
  borderRadius: showMenu ? 15 : 0,
  // Transforming View...
  transform: [
    { scale: scaleValue },
    { translateX: offsetValue }
  ]
  }}>

  {
    // Menu Button...
  }

  <Animated.View style={{
    transform: [{
      translateY: closeButtonOffset
    }]
  }}>
    <TouchableOpacity onPress={() => {
      // Do Actions Here....
      // Scaling the view...
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true
      })
        .start()

      Animated.timing(offsetValue, {
        // YOur Random Value...
        toValue: showMenu ? 0 : 230,
        duration: 300,
        useNativeDriver: true
      })
        .start()

      Animated.timing(closeButtonOffset, {
        // YOur Random Value...
        toValue: !showMenu ? -30 : 0,
        duration: 300,
        useNativeDriver: true
      })
        .start()

      setShowMenu(!showMenu);
    }}>

      <Image source={showMenu ? close : menu} style={{
        width: 20,
        height: 20,
        tintColor: 'black',
        marginTop: 40,

      }}></Image>

            </TouchableOpacity>
           <View>

            <Button
        mode="outlined"
        onPress={() => navigation.navigate('CalculateJumpHeightScreen')}
      >
        Calculate jump height
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('CalculateJumpWidthScreen')}
      >
        Calculate jump width
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('CalculateSpeedScreen')}
      >
        Calculate running speed
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        One-Rep-Max Test
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('StatisticScreen')}
      >
        Statistics
      </Button>

      </View>
      
          </Animated.View>
        </Animated.View>
      </SafeAreaView>



  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});