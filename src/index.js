import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./Clock";
import GlobalStyles from "./Styles/global";

import { store } from "./Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Clock />
    </Provider>
  </React.StrictMode>
);
