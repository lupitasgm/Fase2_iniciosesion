import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './stackRoutes';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen 
                name="Iniciosesion" 
                component={Routes.Iniciosesion} 
                options={ { 
                    headerShown: false, 
                } } 
            />  

            <Stack.Screen 
                name="Home" 
                component={Routes.Home} 
                options={ { 
                    headerShown: false, } }
            />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;