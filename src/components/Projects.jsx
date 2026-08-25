import { ArrowRight } from 'lucide-react';
import reception from '../assets/images/project-reception.webp';
import conference from '../assets/images/project-conference.webp';
import lounge from '../assets/images/project-lounge.webp';
import storage from '../assets/images/project-storage.webp';
import workstations from '../assets/images/project-workstations.webp';

const projects = [
  { title: 'Executive Reception', category: 'Front Office', image: reception },
  { title: 'Leadership Boardroom', category: 'Conference', image: conference },
  { title: 'Collaborative Lounge', category: 'Lounge', image: lounge },
  { title: 'Integrated Storage', category: 'Storage', image: storage },
  { title: 'Open-Plan Workplace', category: 'Workstations', image: workstations },
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
