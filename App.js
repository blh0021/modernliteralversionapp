import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import About from "./component/v2/About";
import HomeScreen from "./component/v2/HomeScreen";
import Read from "./component/v2/Read";
import Preface from "./component/v2/Preface";
import History from "./component/v2/History";
import Privacy from "./component/v2/Privacy";
import { useColorScheme } from "react-native";
import Theme from "./component/v2/Theme";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function App() {
  const colorScheme = useColorScheme();
  const theme = new Theme(colorScheme);
  const mainTheme = theme.main();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Read"
        screenOptions={({ navigation }) => ({
          title: "Modern Literal Version",
          headerStyle: [mainTheme.container],
          headerTitleStyle: [mainTheme.text],
          headerRight: () => (
            <Ionicons
              name="md-settings-sharp"
              size={32}
              color={mainTheme.text.color}
              onPress={() => navigation.navigate("Home")}
            />
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="Preface" component={Preface} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Privacy" component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
