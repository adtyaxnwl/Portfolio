import { useEffect, useState } from 'react';
import '../styles/Skills.css';

const skills = [
  { category: 'Languages & Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Responsive Web Design'] },
  { category: 'Data Visualization', items: ['Chart.js', 'Recharts', 'Canvas API'] },
  { category: 'Creative Tools', items: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics', 'Visual Design & Branding'] },
];

export default function Skills() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(() => { setError('Failed to load users.'); setLoading(false); });
  }, []);

  return (
    <main className="skills">
      <div className="page-header">
        <div className="page-tag">What I know</div>
        <h1 className="page-title">Skills</h1>
      </div>

      <section className="skills-section">
        {skills.map(({ category, items }) => (
          <div className="skill-group" key={category}>
            <h3 className="skill-category">{category}</h3>
            <div className="skill-chips">
              {items.map(skill => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="users-section">
        <div className="users-header">
          <h2 className="users-title">API Users</h2>
          <span className="users-source">jsonplaceholder.typicode.com/users</span>
        </div>

        {loading && <p className="users-loading">Loading users…</p>}
        {error && <p className="users-error">{error}</p>}

        {!loading && !error && (
          <div className="users-grid">
            {users.map(user => (
              <div className="user-card" key={user.id}>
                <div className="user-avatar">{user.name.charAt(0)}</div>
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-email">{user.email}</span>
                  <span className="user-company">{user.company.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
