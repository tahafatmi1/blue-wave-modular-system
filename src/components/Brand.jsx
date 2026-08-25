function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#home" aria-label="Blue Wave Modular System home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M41 10c-3 14-12 20-24 18 4 1 8 4 9 10-10-2-17-9-17-18 0-2 .3-4 1-6 7 4 13 3 18-2 4-4 8-5 13-2Z" />
        </svg>
      </span>
      <span className="brand__copy">
        <strong>Blue Wave</strong>
        <small>Modular System</small>
      </span>
    </a>
  );
}

export default Brand;
