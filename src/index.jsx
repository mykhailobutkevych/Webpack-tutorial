import * as $ from "jquery";
import Post from "@models/Post";
import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import WebpackLogo from "./assets/webpack-logo.jpg";
import React from "react";
import { render } from "react-dom";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

import("lodash").then(_ => {
  console.log("Lazy loading for Lodash: ", _random(0, 42, true));
});

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").html(post.toString());

const App = () => (
  <div class="container">
    <h1>Webpack Course</h1>

    <hr />

    <div class="logo"></div>

    <hr />

    <pre></pre>

    <div class="box">
      <h2>Less</h2>
    </div>

    <div class="card">
      <h2>Scss</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

// console.log("JSON:", json);
// console.log("XML:", xml);
// console.log("CSV:", csv);
