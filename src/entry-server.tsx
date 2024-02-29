import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./App";
import { indexHtml } from "./indexHtml";

export function render(req: ExpressRequest, res: ExpressResponse) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  res
    .status(200)
    .set({ "Content-Type": "text/html" })
    .send(indexHtml({ html, css: "", manifest: "", head: "" }));
}
