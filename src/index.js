import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
