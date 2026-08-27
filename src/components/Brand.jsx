import logo from '../assets/images/blue-wave-logo.webp';

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#home" aria-label="Blue Wave Modular System home">
      <img className="brand__logo" src={logo} alt="Blue Wave Modular Systems — Quality Office Furniture" />
    </a>
  );
}

export default Brand;
