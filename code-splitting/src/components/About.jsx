import React from "react";
import { Link } from "react-router-dom";
import _, { toUpper } from 'lodash';

export default() =>{
const [title, setTitle] = React.useState('Open Webinars');

const handler = () => {
    import('lodash/toUpper' /* webpackChunkName: "lodash-toUpper"*/).then(toUpper =>{
        setTitle(toUpper.default(title))
    })
};

   return <>
        <h1>About page</h1>
        <h2>{title}</h2>
        <button onClick={handler}>To Upper Title</button>
        <Link to="/">Back home</Link>
    </>
};