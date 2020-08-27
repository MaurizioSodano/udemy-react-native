import React, {useState} from "react";
import {View,StyleSheet,Text} from "react-native"
import ColorCounter from "../components/ColorCounter"
const COLOR_INCREMENT=15;

const SquareColorScreen=()=>{
    const [red,setRed]=useState(Math.floor(Math.random()*256));
    const [green,setGreen]=useState(Math.floor(Math.random()*256))
    const [blue,setBlue]=useState(Math.floor(Math.random()*256))

const setColor=(color,change)=>{
   switch (color){
      case "red":
         red+change>255 || red+change<0 ? null : setRed(red+change);
         break;
      case "green":
         green+change>255||green+change<0?null:setGreen(green+change);
         break;
      case "blue":
         blue+change>255||blue+change<0?null:setBlue(blue+change);
         break;
      default:
         break;
   }
}
    return <View>
         <ColorCounter 
            onIncrease={()=>setColor("red",COLOR_INCREMENT)}
            onDecrease={()=>setColor("red",-COLOR_INCREMENT)}
            colorName="Red"/>
         <ColorCounter 
            onIncrease={()=>setColor("green",+COLOR_INCREMENT)}
            onDecrease={()=>setColor("green",-COLOR_INCREMENT)}
            colorName="Green"/>
         <ColorCounter 
            onIncrease={()=>setColor("blue",+COLOR_INCREMENT)}
            onDecrease={()=>setColor("blue",-COLOR_INCREMENT)}            
            colorName="Blue"/>
         <View style={{height:100, width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
}



const style=StyleSheet.create({});

export default SquareColorScreen