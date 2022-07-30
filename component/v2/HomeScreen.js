import React from "react";
import { Button, View, useColorScheme } from "react-native";
import Theme from "./Theme";

function HomeScreen({ navigation }) {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  return (
    <View
      style={[
        { flex: 1, alignItems: "center", justifyContent: "center" },
        mainTheme.container,
      ]}
    >
      <Button title="Read" onPress={() => navigation.navigate("Read")} />
      <Button title="Preface" onPress={() => navigation.navigate("Preface")} />
      <Button title="History" onPress={() => navigation.navigate("History")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button title="Privacy" onPress={() => navigation.navigate("Privacy")} />
    </View>
  );
}

export default HomeScreen;
