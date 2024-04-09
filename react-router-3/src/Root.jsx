import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

function Root() {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
}
export default Root;
