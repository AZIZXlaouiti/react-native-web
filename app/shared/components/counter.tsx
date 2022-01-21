import React, { useState } from 'react';
import { Pressable , StyleSheet , Text , View, ViewStyle } from 'react-native';

const centered: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center'
};

const SIZE = 100;
const FONT_SIZE = SIZE /2;

const styles = StyleSheet.create({
    contatiner: {
        ...centered,
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#ee7767'
    },
    counter: {
        ...centered,
        height: SIZE ,
        width: SIZE,
        borderRadius: 5 ,
        backgroundColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontSize: FONT_SIZE,
    },
    button: {
        ...centered,
        height: SIZE,
        width: SIZE
    },
    numberText: {
        ...centered,
        color:'#ee7767',
        fontWeight: 'bold',
        fontSize: FONT_SIZE
    }
});

export const Counter =()=>{
    const [count , setCount] = useState(10)
    const increment =()=>{
        setCount(count + 1)
    };
    const decrement = ()=>{
        count > 0 && setCount(count - 1)
    }
    return (
      <View style={styles.contatiner}>
          <Pressable style={styles.button} onPress={decrement}>
              <Text style={styles.buttonText}>
                 -
              </Text>
          </Pressable>
          <View style={styles.counter}>
              <Text style={styles.numberText}>
                     {count}
              </Text>
          </View>
          <Pressable style={styles.button} onPress={increment}>
              <Text style={styles.buttonText}>
                +
              </Text>
          </Pressable>
      </View>
    )
}