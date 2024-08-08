import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const theme: DefaultTheme = {
  bgColor: "#2d3436",
  textColor: "#dfe6e9",
  accentColor: "#fdcb6e",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
