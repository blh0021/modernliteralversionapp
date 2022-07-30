import React from "react";
import { Ionicons } from "@expo/vector-icons";

export function Play({ onPress, theme }) {
  return (
    <Ionicons
      name="md-play"
      size={32}
      color={theme.text.color || "#fff"}
      onPress={onPress}
    />
  );
}

export function Stop({ onPress, theme }) {
  return (
    <Ionicons
      name="md-stop"
      size={32}
      color={theme.text.color || "#fff"}
      onPress={onPress}
    />
  );
}

export function Forward({ onPress, theme }) {
  return (
    <Ionicons
      name="md-play-skip-forward-sharp"
      size={32}
      color={theme.text.color || "#fff"}
      onPress={onPress}
    />
  );
}

export function Backward({ onPress, theme }) {
  return (
    <Ionicons
      name="md-play-skip-back-sharp"
      size={32}
      color={theme.text.color || "#fff"}
      onPress={onPress}
    />
  );
}

export function CloseButton({ onPress, theme }) {
  return (
    <Ionicons
      name="md-close"
      size={18}
      color={theme.text.color || "#fff"}
      onPress={onPress}
    />
  );
}
