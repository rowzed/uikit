import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#a37532",
  primaryBright: "#a37532",
  primaryDark: "#a37532",
  secondary: "#9a5f61",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#d4dcd7",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#fc6cac",
  textDisabled: "#BDC2C4",
  textSubtle: "#04dcfc",
  borderColor: "#E9EAEB",
  card: "#d4dcd7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "red",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#d4dcd7",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
