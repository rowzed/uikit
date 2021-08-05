import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#e15e1d",
  primaryBright: "#e15e1d",
  primaryDark: "#e15e1d",
  secondary: "#c04697",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f7f7f7",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#dbdbdb",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#040c0a",
  textDisabled: "#BDC2C4",
  textSubtle: "#040c0a",
  borderColor: "#E9EAEB",
  card: "#dbdbdb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "red",
  background: "#190000",
  backgroundDisabled: "#3c3742",
  contrast: "#dbdbdb",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#040c0a",
  textDisabled: "#666171",
  textSubtle: "#040c0a",
  borderColor: "#524B63",
  card: "#c40000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
