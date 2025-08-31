import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from "react";
import SmokeyCursor from "./components/SmokeyCursor";

createRoot(document.getElementById("root")!).render(<App />);
