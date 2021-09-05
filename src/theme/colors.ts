import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#a842a9",
  primaryBright: "#a842a9",
  primaryDark: "#a842a9",
  secondary: "#3f48cc",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fedbff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#e3b3e4",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#040c0a",
  textDisabled: "#BDC2C4",
  textSubtle: "#040c0a",
  borderColor: "#E9EAEB",
  card: "#e3b3e4",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "red",
  background: "#641565",
  backgroundDisabled: "#3c3742",
  contrast: "#e3b3e4",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#cecccc",
  textDisabled: "#666171",
  textSubtle: "#cecccc",
  borderColor: "#524B63",
  card: "#460947",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
