import { Text, View, FlatList, StyleSheet,Image } from 'react-native'
import React, { Component } from 'react'
import Paragraph from '../components/Paragraph'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Background from '../components/Background'
import Button from '../components/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import profile from '../assets/profile.png'

export default class AllCoachesComponent extends Component {
    constructor(props){
        super(props)
            this.state= {
                dataSource: []
            }
        
    }
    componentDidMount() {
        fetch("http://192.168.0.214:5000/athletes")
        .then((response)=> response.json())
        .then(responseJson => {
            this.setState ({
                dataSource: responseJson 
            })
            console.log("nice",responseJson)
        })
      }


      _renderItem = ({item, index, navigation})=>{
          return(
              <Card style={styles.mycard} 
              onPress={()=>this.props.navigation.navigate("HomePageScreen")} >
              <View style={styles.cardView}>
              <Image 
              style={{width:60,height:60,borderRadius:30}}
              source={{uri:item.picture}}
              />
                <View style={{marginLeft:10}}>
                    <Text  style={styles.text}>{item.name}</Text>
                </View>
              </View>
                  
              </Card>
          )
      }
  render() {
      let {dataSource} = this.state
    return (

        <SafeAreaView style={styles.container}>
        <Paragraph >Select your coach please</Paragraph>
        <Paragraph onPress={() => navigation.navigate('AllUsersScreen')}>Coach Mohamed</Paragraph>
            <FlatList
            
                data={dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index)=>index.toString()}
            />
        </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
    container: {
      top: 1 + getStatusBarHeight(),
        flex: 1,

    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: "flex-start",
    },
    /*text:{
        marginVertical: 30,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },*/
    mycard:{
        margin:5,
       
    },
    cardView:{
         flexDirection:"row",
         padding:6
    },
    text:{
        fontSize:18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },

  })