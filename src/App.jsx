import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="App flex flex-col bg-light-white-third dark:bg-default font-sans tracking-tight">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}
