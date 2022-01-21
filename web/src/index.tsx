import React from 'react';
import {render} from 'react-dom';
import { View  , StyleSheet} from 'react-native';
import { Counter } from '../shared/components/counter';

const styles = StyleSheet.create({
    conatiner:{
      width: "100%",
      height: "100%"
    }
  })
const App =()=>{
    return (
            <Counter/>
    )
}

render(<App /> ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
