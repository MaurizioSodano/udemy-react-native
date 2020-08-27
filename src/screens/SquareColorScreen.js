import React, {useReducer} from "react";
import {View,StyleSheet} from "react-native"
import ColorCounter from "../components/ColorCounter"
const COLOR_INCREMENT=15;

const reducer=(state,action)=>{
   switch (action.type) {
      case "change_red":
         var redColor= state.red+action.payload;
         return redColor>255||redColor<0?state:{...state, red:redColor};
      case "change_green":
         var greenColor= state.green+action.payload;
         return greenColor>255||greenColor<0?state:{...state, green:greenColor};
      case "change_blue":
         var blueColor= state.blue+action.payload;
         return blueColor>255||blueColor<0?state:{...state, blue:blueColor};
      default:
         return state;
   }

};


const SquareColorScreen=()=>{

    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});

    const {red,green,blue}=state;

    return <View>
         <ColorCounter 
            onIncrease={()=>dispatch({type:"change_red",payload:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({type:"change_red",payload:-COLOR_INCREMENT})}
            colorName="Red"/>
         <ColorCounter 
            onIncrease={()=>dispatch({type:"change_green",payload:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({type:"change_green",payload:-COLOR_INCREMENT})}
            colorName="Green"/>
         <ColorCounter 
            onIncrease={()=>dispatch({type:"change_blue",payload:COLOR_INCREMENT})}
            onDecrease={()=>dispatch({type:"change_blue",payload:-COLOR_INCREMENT})}            
            colorName="Blue"/>
         <View style={{height:100, width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
}



const style=StyleSheet.create({});

export default SquareColorScreen