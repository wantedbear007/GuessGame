import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over.</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="Start a new game." onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
