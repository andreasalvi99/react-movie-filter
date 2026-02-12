import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ? Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// ? CSS
import "../src/assets/css/index.css";

// ? Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
