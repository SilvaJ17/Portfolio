
import LandingSection from "../Sections/LandingSection";
import AboutMeSection from "../Sections/AboutMeSection";
import ProjectSection from "../Sections/ProjectSection";
import ContactSection from "../Sections/ContactSection";

const HomePage = () => {
  return (
    <>
      <div className="Main-Sec">
        <LandingSection />
      </div>
      <AboutMeSection />
      <ProjectSection />
    <ContactSection /> 
    </>
  );
};
export default HomePage;
