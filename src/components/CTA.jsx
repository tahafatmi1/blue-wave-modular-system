import { Mail, Phone } from 'lucide-react';

function CTA() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__pattern" aria-hidden="true" />
      <div className="container cta__inner">
        <div>
          <span className="eyebrow eyebrow--light">Let’s build something better</span>
          <h2 id="cta-title">Ready to Transform Your Workspace?</h2>
          <p>Call Blue Wave Modular System today for a free consultation and quote.</p>
        </div>
        <div className="cta__actions">
          <a className="button button--orange" href="tel:+19094466860"><Phone size={18} /> Call Now</a>
          <a className="button button--light-outline" href="mailto:blue-wave08@live.com?subject=Blue%20Wave%20Workspace%20Consultation"><Mail size={18} /> Email Us</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
