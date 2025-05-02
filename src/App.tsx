import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CourseOverview from './sections/CourseOverview';
import TargetAudience from './sections/TargetAudience';
import Modules from './sections/Modules';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import CallToAction from './sections/CallToAction';
import FAQSection from './sections/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-screen bg-white">
      <Navbar />
      <div className="w-full">
        <Hero />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseOverview />
          <TargetAudience />
          <Modules />
          <Benefits />
          <Testimonials />
          <CallToAction />
          <FAQSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
