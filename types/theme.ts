import type { Colors } from "@/constants/Colors";

export type ColorScheme = "light" | "dark";

export type ThemeColors = typeof Colors.light & typeof Colors.dark;

export type ColorKeys = keyof ThemeColors;

export type Theme = {
  [K in ColorScheme]: ThemeColors;
};
