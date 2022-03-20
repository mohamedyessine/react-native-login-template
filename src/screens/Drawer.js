import StartScreen from "./StartScreen";
import HomePageScreen from "./HomePageScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePageScreen">
      <Drawer.Screen name="HomePageScreen" component={HomePageScreen} />
      <Drawer.Screen name="StartScreen" component={StartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}