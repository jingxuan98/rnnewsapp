import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabScreen from "./src/screen/TabScreen";
import * as Font from "expo-font";

class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }

  render() {
    return <TabScreen />;
  }
}

export default App;
