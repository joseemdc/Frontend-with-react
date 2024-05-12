// App -> server/client
// ssr = server -> renderizo app desde el server
// index = client -> hidrato la App renderizada en el server desde client
// server

import React from "react";
import { BrowserRouter } from "react-router-dom";
import {hydrateRoot } from "react-dom"
import App from "./components/App";

const AppWithRouter = () =>(
<BrowserRouter>
<App></App>
</BrowserRouter>
)

hydrateRoot(<AppWithRouter/>, document.getElementById('app'));
