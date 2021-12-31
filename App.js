import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"

//screen
import HomeScreen from './app/screens/HomeScreen';

//components
import AppDrawer from './app/components/common/AppDrawer';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {


  const HomeDrawer = () => {
    return <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="HomeScreen" overlayColor="transparent" edgeWidth={100} drawerStyle={{ backgroundColor: Colors.lightWhite, width: "75%" }} drawerContent={(props) => <AppDrawer {...props} />}  >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  }


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeDrawer">
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

