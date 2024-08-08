import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FinanceContextProvider } from "./Context/FinanceContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
