import React from "react";

import { Text, View, useColorScheme } from "react-native";

import Theme from "./Theme";

export default function Privacy() {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();
  return (
    <View
      style={[
        { flex: 1, alignItems: "center", padding: 10 },
        mainTheme.container,
      ]}
    >
      <Text style={[{ fontSize: 25 }, mainTheme.text]}>Privacy Notice</Text>
      <Text style={[{ fontSize: 18, paddingTop: 10 }, mainTheme.text]}>
        This privacy notice discloses the privacy practices for the Modern
        Literal Version - Bible app. Currently we do not collect or store any
        personal information.
      </Text>
    </View>
  );
}
