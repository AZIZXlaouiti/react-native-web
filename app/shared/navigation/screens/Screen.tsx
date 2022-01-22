import  React from 'react';
import {View , Text } from 'react-native';

export default function Screen({navigation}:any){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
         </View>
    )
}

function alert(arg0: string): void {
    throw new Error('Function not implemented.');
}
