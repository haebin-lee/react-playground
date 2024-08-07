import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";

const theme: DefaultTheme = {
  bgColor: "#2d3436",
  textColor: "#dfe6e9",
  accentColor: "#fdcb6e",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
