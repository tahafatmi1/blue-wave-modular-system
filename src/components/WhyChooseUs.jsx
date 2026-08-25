import { BadgeCheck, Compass, Handshake, SlidersHorizontal } from 'lucide-react';
import workstations from '../assets/images/project-workstations.webp';

const features = [
  { title: 'Quality Products', text: 'Commercial-grade furniture selected for performance, comfort, and lasting value.', icon: BadgeCheck },
  { title: 'Custom Solutions', text: 'Layouts and product combinations tailored to your space, goals, and budget.', icon: SlidersHorizontal },
  { title: 'Expert Guidance', text: 'Clear recommendations from planning through product selection and placement.', icon: Compass },
  { title: 'Reliable Service', text: 'Responsive communication, coordinated delivery, and professional installation.', icon: Handshake },
];

function WhyChooseUs() {
  return (
    <section className="why" id="why-us" aria-labelledby="why-title">
      <div className="container why__grid">
        <div className="why__content" id="about">
          <span className="eyebrow">Why choose us</span>
          <h2 id="why-title">Experience, Quality & Service You Can Trust</h2>
          <p className="why__intro">We make workplace projects easier to navigate, with practical guidance and solutions built around your people.</p>
          <div className="why__features">
            {features.map(({ title, text, icon: Icon }) => (
              <article className="feature" key={title}>
                <span className="feature__icon"><Icon size={23} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="why__visual">
          <img src={workstations} alt="Completed open-plan office workspace" loading="lazy" />
          <div className="why__statement">
            <span>Built for productivity.</span>
            <strong>Designed for people.</strong>
          </div>
          <div className="why__badge"><strong>8</strong><span>Complete service categories</span></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
