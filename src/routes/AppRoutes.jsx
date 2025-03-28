import React from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "../pages/Splash";
import GetStarted from "../pages/GetStarted";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/getstarted" element={<GetStarted />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
