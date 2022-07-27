import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./global.css";

const root = document.getElementById("root") as HTMLDivElement;
ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
