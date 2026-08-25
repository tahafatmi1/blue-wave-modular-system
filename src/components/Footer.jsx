import { Phone } from 'lucide-react';
import Brand from './Brand';

const quickLinks = [['Home', '#home'], ['About Us', '#about'], ['Products & Services', '#services'], ['Projects', '#projects'], ['Why Choose Us', '#why-us'], ['Contact Us', '#contact']];
const footerServices = ['Front Office Furniture', 'Conference Room Furniture', 'Lounge Furniture', 'Storage Solutions', 'Space Planning & Design', 'Delivery & Installation'];

function SocialIcon({ name }) {
  if (name === 'Facebook') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V7c0-.8.5-1 1-1h2V2.2c-.7-.1-1.7-.2-3-.2-3 0-5 1.8-5 5.2v1.3H6V13h3v9h4.5v-9h3l.5-4.5h-3Z" /></svg>;
  }
  if (name === 'Instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.4-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3.5A2.5 2.5 0 1 1 4 8a2.5 2.5 0 0 1 0-4.5ZM2 9.5h4V22H2V9.5Zm6.5 0h3.8v1.7h.1c.6-1 1.9-2.2 4.2-2.2 4.4 0 5.3 2.9 5.3 6.7V22h-4v-5.6c0-1.3 0-3.8-2.4-3.8s-2.8 1.8-2.8 3.7V22h-4V9.5Z" /></svg>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand light />
          <p>Office furniture solutions and workspace design, delivered with clarity and care.</p>
          <a className="footer__phone" href="tel:+19094466860"><Phone size={17} /> 909-446-6860</a>
          <div className="footer__socials" aria-label="Social media links">
            <a href="#" aria-label="Facebook"><SocialIcon name="Facebook" /></a>
            <a href="#" aria-label="Instagram"><SocialIcon name="Instagram" /></a>
            <a href="#" aria-label="LinkedIn"><SocialIcon name="LinkedIn" /></a>
          </div>
        </div>
        <div><h3>Quick Links</h3><ul>{quickLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
        <div><h3>Our Services</h3><ul>{footerServices.map((item) => <li key={item}><a href="#services">{item}</a></li>)}</ul></div>
        <div className="footer__contact"><h3>Start a Conversation</h3><p>Planning a new office, refresh, or relocation? Let’s talk through what you need.</p><a className="button button--orange" href="tel:+19094466860"><Phone size={17} /> Call 909-446-6860</a></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Blue Wave Modular System. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}

export default Footer;
