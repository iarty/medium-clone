import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./context/CurrentUser";
import CurrentUserChecker from "./components/CurrentUserCheker/CurrentUserChecker";

const app = (
  <CurrentUserProvider>
    <CurrentUserChecker>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserChecker>
  </CurrentUserProvider>
);

ReactDOM.render(app, document.getElementById("root"));
