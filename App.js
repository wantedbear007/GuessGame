import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { StartGameScreen } from "./screens/StartGameScreen";

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
