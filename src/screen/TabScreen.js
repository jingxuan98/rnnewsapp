import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header} hasTabs>
          <Left />
          <Body>
            <Title>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009387"
  }
});
