import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { Portfolio } from './component/home';
import { AboutMyself } from './component/about';

import { TechStackShowcase } from './component/stack';
import { Project } from './component/project';
import { ContactSection } from './component/contact';
import { EducationSection } from './component/education';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<AboutMyself />} />
        <Route path='/education' element={<EducationSection />} />
        <Route path='/tech-stack' element={<TechStackShowcase />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='*' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
