import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Brand from './Brand';

const links = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Products & Services', '#services'],
  ['Projects', '#projects'],
  ['Why Choose Us', '#why-us'],
  ['Contact Us', '#contact'],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>Commercial furniture, thoughtfully delivered.</span>
          <a href="tel:+19094466860"><Phone size={14} /> 909-446-6860</a>
        </div>
      </div>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container navbar__inner">
          <Brand />
          <button
            className="navbar__toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <div className={`navbar__panel ${open ? 'is-open' : ''}`}>
            <ul className="navbar__links">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
            <a className="button button--orange navbar__phone" href="tel:+19094466860">
              <Phone size={17} /> 909-446-6860
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
