import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import WelcomeScreen from "./screens/WelcomeScreen";

function App() {
  return (
    // <BrowserRouter basename="/build"> jika pake path
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route element={<PrivateRoutes />}>
          {/* <Route path="/home" element={<HomeScreen />} /> */}
          {/* KMS */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
