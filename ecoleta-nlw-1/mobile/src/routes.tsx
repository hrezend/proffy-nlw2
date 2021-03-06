import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Details from './pages/Details';
import Points from './pages/Points';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor: '#F0F0F5',}}}>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
                <AppStack.Screen name="Details" component={Details}></AppStack.Screen>
                <AppStack.Screen name="Points" component={Points}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;