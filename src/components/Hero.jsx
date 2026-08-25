import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '../assets/images/hero-office.webp';

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <img className="hero__image" src={heroImage} alt="Premium executive office furnished in warm walnut" fetchPriority="high" />
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="eyebrow">Workplace solutions, made personal</span>
          <h1 id="hero-heading">Designing Better Workspaces. <em>Delivering Results.</em></h1>
          <p>From front office furniture to conference rooms, lounge areas, storage solutions, and relocation services — we create functional workspaces designed for productivity and comfort.</p>
          <div className="hero__actions">
            <a className="button button--navy" href="#services">Explore Products <ArrowRight size={18} /></a>
            <a className="button button--outline" href="tel:+19094466860"><Phone size={17} /> Get A Quote</a>
          </div>
        </div>
      </div>
      <div className="hero__trust">
        <div className="container hero__trust-inner">
          <span>Space Planning</span><i />
          <span>Furniture Selection</span><i />
          <span>Professional Installation</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
