import {
  Armchair, ArrowUpRight, Boxes, Building2, LampDesk,
  PackageCheck, Ruler, Sofa, Truck, UsersRound,
} from 'lucide-react';
import reception from '../assets/images/project-reception.webp';
import conference from '../assets/images/project-conference.webp';
import lounge from '../assets/images/project-lounge.webp';
import storage from '../assets/images/project-storage.webp';
import workstations from '../assets/images/project-workstations.webp';

const services = [
  { title: 'Front Office Furniture', description: 'Create a polished first impression with reception desks and welcoming guest seating.', image: reception, icon: Building2 },
  { title: 'Conference Room Furniture', description: 'Purposeful tables and seating designed for collaboration and clear thinking.', image: conference, icon: UsersRound },
  { title: 'Lounge Furniture', description: 'Comfortable, refined pieces that turn shared areas into places people enjoy.', image: lounge, icon: Sofa },
  { title: 'Storage & Shelving Solutions', description: 'Keep everyday essentials organized with flexible, space-smart storage.', image: storage, icon: Boxes },
  { title: 'Office Accessories', description: 'The finishing details that improve comfort, organization, and daily performance.', image: workstations, icon: LampDesk },
  { title: 'Space Planning & Design', description: 'Thoughtful layouts that improve flow, focus, collaboration, and capacity.', image: workstations, icon: Ruler },
  { title: 'Delivery & Installation', description: 'Careful coordination and professional setup from arrival to final placement.', image: reception, icon: PackageCheck },
  { title: 'Move & Relocation Service', description: 'A practical, organized transition that keeps your team moving forward.', image: conference, icon: Truck },
];

function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Products & services</span>
          <h2 id="services-title">Solutions for Every Workspace</h2>
          <p>From a single room refresh to a full-office installation, every solution is selected around how your team works.</p>
        </div>
        <div className="services__grid">
          {services.map(({ title, description, image, icon: Icon }, index) => (
            <article className="service-card" key={title} style={{ '--delay': `${index * 50}ms` }}>
              <div className="service-card__media">
                <img src={image} alt="" loading="lazy" />
                <span className="service-card__icon"><Icon size={23} /></span>
              </div>
              <div className="service-card__body">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact">Request Details <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
