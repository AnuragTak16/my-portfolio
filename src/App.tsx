import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactSection } from "./component/contact";
import { Portfolio } from "./component/home";
import { EducationSection } from "./component/education";
import { TechStackShowcase } from "./component/stack";
import { AboutMyself } from "./component/about";
import { Project } from "./component/project";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMyself />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/tech-stack" element={<TechStackShowcase />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
