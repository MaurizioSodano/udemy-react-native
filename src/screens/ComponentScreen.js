import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.text}>this is a Component Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentScreen;
