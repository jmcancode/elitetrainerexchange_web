// src/styles/themeColors.js

export const baseColors = {
  red: "#E3350D",
  gold: "#FFCB05",
  navy: "#2A3D66",
  gray: "#F4F4F4",
  darkGray: "#1C1C1C",
  white: "#FFFFFF",
  black: "#000000",
};

export const lightTheme = {
  background: baseColors.white,
  text: baseColors.navy,
  accent: baseColors.red,
  secondary: baseColors.gold,
  subtle: baseColors.gray,
};

export const darkTheme = {
  background: baseColors.darkGray,
  text: baseColors.white,
  accent: baseColors.gold,
  secondary: baseColors.red,
  subtle: "#2B2B2B",
};
