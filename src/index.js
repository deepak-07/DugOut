import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./themeContext";
import { LocalisationProvider } from "./localiseContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Router>
      <LocalisationProvider>
        <ThemeProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ThemeProvider>
      </LocalisationProvider>
    </Router>
  </StrictMode>,
  rootElement
);
