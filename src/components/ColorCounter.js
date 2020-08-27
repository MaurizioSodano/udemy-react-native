import React from "react";
import { Text, Button, View } from "react-native";

const ColorCounter = ({colorName,onIncrease,onDecrease}) => { 
    
    return <View>
        <Text>{colorName}</Text>
        <Button title={`Increase ${colorName}`} onPress={()=>onIncrease()}/>
        <Button title={`Decrease ${colorName}`} onPress={()=>onDecrease()}/>
      
    </View> 
}

export default ColorCounter;