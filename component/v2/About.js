import * as React from "react";
import { Text, View, useColorScheme, Button } from "react-native";
import * as Linking from "expo-linking";
import Theme from "./Theme";

export default function About() {
  const _handlePress = () => {
    Linking.openURL("http://www.modernliteralversion.org");
  };

  const _fb = () => {
    Linking.openURL("https://www.facebook.com/modernLiteralVersionMobileApp/");
  };

  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  return (
    <View
      style={[
        { flex: 1, alignItems: "left", padding: 10 },
        mainTheme.container,
      ]}
    >
      <Text style={[{ fontSize: 25, paddingBottom: 10 }, mainTheme.text]}>
        About MLV App
      </Text>
      <Text style={[mainTheme.text]}>
        The Modern Literal Version was created for those who truly want to know
        what God's Koine Greek Bible says but cannot read it directly. For more
        information and questions visit
      </Text>

      <Button title="MLV Website" onPress={_handlePress}></Button>

      <Text style={[{ fontSize: 25, paddingBottom: 10 }, mainTheme.text]}>
        Discuss the App
      </Text>
      <Text style={[mainTheme.text]}>
        Interested in joining in on the app work, or have things you would like
        to see? Come over to the Facebook page for the app and let us know.
      </Text>
      <Button title="Facebook" onPress={_fb}></Button>
    </View>
  );
}
