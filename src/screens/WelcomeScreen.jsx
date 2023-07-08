import React from "react";
import Layout from "../layouts/DefaultLayout";
import WelcomePage from "../pages/welcome/WelcomePage";

export default function WelcomeScreen() {
  return <Layout child={<WelcomePage />} />;
}
