import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "./Data/Data.json";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="App flex flex-col bg-light-white-third dark:bg-default font-sans tracking-tight">
      <BrowserRouter>
        <Helmet>
          <title>{data.app}</title>
          <meta name="description" content={data.home.intro}></meta>
        </Helmet>
        <Layout />
      </BrowserRouter>
    </div>
  );
}
