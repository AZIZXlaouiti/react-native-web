import React from 'react';
import ReactDOM , {render} from 'react-dom';
import { View  , StyleSheet} from 'react-native';
import { Counter } from '../shared/components/counter';

const App =()=>{
    const styles = StyleSheet.create({
        conatiner:{
          width: "100%",
          height: "100%"
        }
      })
    return (
        <View style={styles.conatiner}> 
            <Counter/>
        </View>
    )
}

render(<App /> ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
