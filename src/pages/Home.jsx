import { useState } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-tag">Web Developer & Systems Builder</div>
        <h1 className="hero-name">Aditya<br /><em>Sonowal</em></h1>
        <p className="hero-bio">
          Creative technologist with a strong foundation in web development and visual design.
          I combine motion design expertise with front-end engineering to build tools that
          enhance digital content quality and performance.
        </p>
        <p className="hero-bio" style={{ marginTop: '12px' }}>
          Currently pursuing B.Tech in Computer Science at Dhemaji Engineering College,
          and working as a freelance web developer and motion designer — delivering
          client-focused creative solutions and analytical tools for modern content creators.
        </p>
      </section>

      <section className="counter-section">
        <div className="counter-card">
          <p className="counter-label">Click Counter</p>
          <span className="counter-number">{count}</span>
          <button className="counter-btn" onClick={() => setCount(c => c + 1)}>
            + Increment
          </button>
        </div>
        <div className="counter-card">
          <p className="counter-label">Projects Completed</p>
          <span className="counter-number">2</span>
          <p className="counter-sub">VisCheck & ImpactLens</p>
        </div>
        <div className="counter-card">
          <p className="counter-label">Years of Experience</p>
          <span className="counter-number">1+</span>
          <p className="counter-sub">Freelance since Sep 2025</p>
        </div>
      </section>
    </main>
  );
}
