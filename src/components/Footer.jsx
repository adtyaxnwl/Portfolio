import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">Aditya Sonowal</span>
        <span className="footer-divider">—</span>
        <span className="footer-copy">© {new Date().getFullYear()}. All rights reserved.</span>
      </div>
    </footer>
  );
}
