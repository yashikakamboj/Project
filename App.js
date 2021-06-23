import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppProvider } from './src/context/AppContext';
import StateWiseScreen from './src/screens/StateWiseScreen';
import React from 'react';
import Ds from './src/screens/Ds';
import Fs from './src/screens/Fs';
import { registerRootComponent } from 'expo';
import HomeScreen from './src/screens/HomeScreen';
import Fruits from './src/screens/Fruits';
import Crop from './src/screens/crop';

const Navigation = createStackNavigator(
  {
      Home: HomeScreen,
      State: StateWiseScreen,
      Details: Ds,
      Flowers : Fs,
      Fruit : Fruits,
      Crop: Crop
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: 
    {
        title: "Haldhar",
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#416EB5',
          flex: 1,
          fontSize: 30,
        }
    }
  }
);
const App = createAppContainer(Navigation);
registerRootComponent(App);
export default()=>{
    return(
          <AppProvider>
              <App />
          </AppProvider>
    );
};