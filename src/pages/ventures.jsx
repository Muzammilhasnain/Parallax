import React from "react";
import Navbar from "../components/Navbar/navbar";
import ShowcasesFullScreen from "../components/Showcases-full-screen/showcases-full-screen";
import DarkTheme from "../layouts/Dark";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <Navbar />
      <ShowcasesFullScreen />
    </DarkTheme>
  );
};

export default ShowcaseDark;
