// src/styles/themeColors.js

// ---------------------------------------
// Unified Base Colors (From Mobile Palette)
// ---------------------------------------
export const baseColors = {
  // Grayscale Core
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  // Light/Dark system bases
  white: "#FFFFFF",
  black: "#000000",

  // Gold / Red (Brand Accents)
  gold: "#F59E0B",
  goldLight: "#FCD34D",
  red: "#DC2626",

  // Navy Brand
  navyPrimary: "#1E3A8A",
  navyPrimaryDark: "#1E40AF",
  navyPrimaryLight: "#3B82F6",

  // Purple Brand
  purplePrimary: "#8B5CF6",
  purplePrimaryDark: "#7C3AED",
  purplePrimaryLight: "#A78BFA",
};

// ---------------------------------------
// Light Theme – Grayscale (Matches Mobile)
// ---------------------------------------
export const lightTheme = {
  background: baseColors.white,
  backgroundSecondary: baseColors.gray50,
  backgroundTertiary: baseColors.gray100,

  text: baseColors.gray900,
  textSecondary: baseColors.gray500,
  textTertiary: baseColors.gray400,

  primary: baseColors.gray800,
  primaryLight: baseColors.gray600,
  primaryDark: baseColors.gray900,

  accent: baseColors.gray800,
  accentLight: baseColors.gray600,

  border: baseColors.gray200,
  borderLight: baseColors.gray100,
  borderDark: baseColors.gray300,

  card: baseColors.white,
  cardElevated: baseColors.white,

  subtle: baseColors.gray100,
};

// ---------------------------------------
// Dark Theme – Grayscale (Matches Mobile)
// ---------------------------------------
export const darkTheme = {
  background: baseColors.black,
  backgroundSecondary: baseColors.gray900,
  backgroundTertiary: baseColors.gray800,

  text: baseColors.gray50,
  textSecondary: baseColors.gray400,
  textTertiary: baseColors.gray500,

  primary: baseColors.gray50,
  primaryLight: baseColors.gray100,
  primaryDark: baseColors.gray200,

  accent: baseColors.gray50,
  accentLight: baseColors.white,

  border: baseColors.gray700,
  borderLight: baseColors.gray800,
  borderDark: baseColors.gray600,

  card: baseColors.gray900,
  cardElevated: baseColors.gray800,

  subtle: baseColors.gray800,
};

// ---------------------------------------
// Navy Brand Theme (Matches Mobile)
// ---------------------------------------
export const navyTheme = {
  background: baseColors.navyPrimary,
  backgroundSecondary: baseColors.navyPrimaryDark,
  backgroundTertiary: baseColors.navyPrimaryLight,

  text: baseColors.white,
  textSecondary: baseColors.gray200,
  textTertiary: baseColors.gray300,

  primary: baseColors.navyPrimary,
  primaryLight: baseColors.navyPrimaryLight,
  primaryDark: baseColors.navyPrimaryDark,

  accent: baseColors.gold,
  accentLight: baseColors.goldLight,

  border: baseColors.navyPrimaryLight,
  borderLight: baseColors.navyPrimaryLight,
  borderDark: baseColors.navyPrimaryDark,

  card: baseColors.navyPrimaryDark,
  cardElevated: baseColors.navyPrimaryLight,

  subtle: baseColors.navyPrimaryDark,
};

// ---------------------------------------
// Purple Brand Theme (Matches Mobile)
// ---------------------------------------
export const purpleTheme = {
  background: baseColors.purplePrimaryDark,
  backgroundSecondary: baseColors.purplePrimaryDark,
  backgroundTertiary: baseColors.purplePrimary,

  text: baseColors.gray50,
  textSecondary: baseColors.purplePrimaryLight,
  textTertiary: baseColors.purplePrimary,

  primary: baseColors.purplePrimary,
  primaryLight: baseColors.purplePrimaryLight,
  primaryDark: baseColors.purplePrimaryDark,

  accent: baseColors.gold,
  accentLight: baseColors.goldLight,

  border: baseColors.purplePrimaryDark,
  borderLight: baseColors.purplePrimaryLight,
  borderDark: baseColors.purplePrimaryDark,

  card: baseColors.purplePrimaryDark,
  cardElevated: baseColors.purplePrimary,

  subtle: baseColors.purplePrimaryDark,
};

// ---------------------------------------
// Export for Theme Switching
// ---------------------------------------
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  navyBrand: navyTheme,
  purpleBrand: purpleTheme,
};
