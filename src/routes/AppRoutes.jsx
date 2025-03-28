import React from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "../pages/Splash";
import GetStarted from "../pages/GetStarted";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/getstarted" element={<GetStarted />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
