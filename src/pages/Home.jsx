import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
