import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View , Text } from 'react-native'; 

const Tab = createBottomTabNavigator();

function Screen({navigation}:any){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
         </View>
    )
}
export default function Nav(){
    return(
        <NavigationContainer>
             <Tab.Navigator>

             </Tab.Navigator>
             <Tab.Screen
              name='Home'
              component={Screen}
              />
         </NavigationContainer>
    )
}
function alert(arg0: string): void {
    throw new Error('Function not implemented.');
}