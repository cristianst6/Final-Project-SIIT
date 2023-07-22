import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalCV from "./routes/PersonalCV";
import ProfessionalCV from "./routes/ProfessionalCV";
import WeatherAppPage from "./routes/WeatherAppPage";
import ContactUsPage from "./routes/ContactUsPage";
import MainSitePage from "./routes/MainSitePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mainsitepage" element={<MainSitePage />} />
      <Route path="/personalcvsp" element={<PersonalCV />} />
      <Route path="/professionalcvsp" element={<ProfessionalCV />} />
      <Route path="/weatherappapisp" element={<WeatherAppPage />} />
      <Route path="/contactussp" element={<ContactUsPage />} />
    </Routes>
  </BrowserRouter>,
);
