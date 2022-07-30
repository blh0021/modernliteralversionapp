import { StyleSheet } from "react-native";

const DARK = {
  background: "#111",
  primary: "#FFF8DC",
  secondary: "",
  notes: "#00BFFF",
  Christ: "#F08080",
};

const LIGHT = {
  background: "#FFF",
  primary: "#000",
  secondary: "",
  notes: "#0022FF",
  Christ: "#8B0000",
};

export default class Theme {
  constructor(context) {
    this.context =
      context == "dark" ? (this.context = DARK) : (this.context = LIGHT);
  }

  main() {
    return StyleSheet.create({
      container: {
        backgroundColor: this.context.background,
      },

      text: {
        color: this.context.primary,
      },

      Christ: {
        color: this.context.Christ,
      },

      notes: {
        color: this.context.notes,
      },
    });
  }
}
