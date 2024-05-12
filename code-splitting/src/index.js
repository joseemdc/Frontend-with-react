import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { createRoot } from "react-dom/client";


const container = document.querySelector('#root')
const root = createRoot(container);
root.render(<App/>);