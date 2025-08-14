
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { NIP19Page } from "./pages/NIP19Page";
import Home from "./pages/Home"; // Import Home
import ClassContent from "./pages/ClassContent"; // Import ClassContent
import AboutMe from "./pages/AboutMe"; // Import AboutMe
import ContactMe from "./pages/ContactMe"; // Import ContactMe

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/class-content" element={<ClassContent />} /> {/* Class Content page */}
        <Route path="/about" element={<AboutMe />} /> {/* About Me page */}
        <Route path="/contact" element={<ContactMe />} /> {/* Contact Me page */}
        <Route path="/index" element={<Index />} />
        <Route path="/:nip19" element={<NIP19Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
