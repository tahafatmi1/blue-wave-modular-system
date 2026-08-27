import { ArrowRight } from 'lucide-react';
import workstations from '../assets/images/project-workstations.webp';
import privateOffice from '../assets/images/project-private-office.webp';
import trainingRoom from '../assets/images/project-training-room.webp';
import workplaceCafe from '../assets/images/project-workplace-cafe.webp';
import designStudio from '../assets/images/project-design-studio.webp';

const projects = [
  { title: 'Open-Plan Workplace', category: 'Workstations', image: workstations },
  { title: 'Private Executive Suite', category: 'Private Office', image: privateOffice },
  { title: 'Flexible Training Room', category: 'Learning Space', image: trainingRoom },
  { title: 'Workplace Café', category: 'Amenity Space', image: workplaceCafe },
  { title: 'Agile Project Studio', category: 'Collaboration', image: designStudio },
];

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading projects__heading">
          <div><span className="eyebrow">Selected projects</span><h2 id="projects-title">Workspaces We’re Proud Of</h2></div>
          <p>Purposeful spaces that balance comfort, durability, and a strong visual identity.</p>
        </div>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <figure className={`project-card project-card--${index + 1}`} key={project.title}>
              <img src={project.image} alt={`${project.title} office furniture project`} loading="lazy" />
              <figcaption><span>{project.category}</span><strong>{project.title}</strong></figcaption>
            </figure>
          ))}
        </div>
        <div className="projects__action"><a className="button button--outline" href="#contact">Discuss Your Project <ArrowRight size={18} /></a></div>
      </div>
    </section>
  );
}

export default Projects;
