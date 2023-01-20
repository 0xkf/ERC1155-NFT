import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import { Web3ContextProvider } from "./hooks";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ChakraProvider, theme } from "@chakra-ui/react";
import store from "./store/store";
import { Helmet } from "react-helmet";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Helmet>
      <script //　アイコン取得用
        src="https://kit.fontawesome.com/14e949c063.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
    <Provider store={store}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <Web3ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Web3ContextProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
