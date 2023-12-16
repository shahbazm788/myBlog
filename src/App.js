import React from "react";
import Hero from "./components/hero";
import Posts from "./components/posts";
import Post from "./components/post";
import TabsComponent from "./components/Tabs";

import "./styles.css";

function App() {
  return (
    <>
      <Hero />
      <TabsComponent />
      <Posts />
    </>
  );
}

export default App;
