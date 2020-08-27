import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => { 
    return <View>
        <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} score={7}></ImageDetail>
        <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} score={8}></ImageDetail>
        <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} score={9}></ImageDetail>
    </View>
}

export default ImageScreen;