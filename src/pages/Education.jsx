import '../styles/Education.css';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Dhemaji Engineering College (DEC)',
    location: 'Dhemaji, Assam',
    period: '2024 – Present',
    status: 'ongoing',
    icon: '🎓',
    details: 'Pursuing a Bachelor\'s degree in CSE with focus on web development, data structures, algorithms, and emerging technologies. Actively participating in hackathons and technical events.',
  },
  {
    degree: 'Higher Secondary (AHSEC, Science)',
    institution: 'Salt Brook Academy',
    location: 'Dibrugarh, Assam',
    period: '2021 – 2023',
    status: 'completed',
    icon: '🏫',
    details: 'Completed Class XII under AHSEC board with Science stream — Physics, Chemistry, Mathematics, and Computer Science as core subjects.',
  },
  {
    degree: 'Matriculation (SEBA)',
    institution: 'Montfort High School',
    location: 'Chabua, Assam',
    period: 'Until 2021',
    status: 'completed',
    icon: '🏠',
    details: 'Completed Class X under SEBA board. Developed early interest in computers and technology.',
  },
];

export default function Education() {
  return (
    <main className="education">
      <div className="page-header">
        <div className="page-tag">Academic background</div>
        <h1 className="page-title">Education</h1>
      </div>

      <div className="edu-timeline">
        {education.map((item, i) => (
          <div className="edu-row" key={i}>
            {/* connector */}
            <div className="edu-connector">
              <div className={`edu-dot ${item.status}`}>{item.icon}</div>
              {i < education.length - 1 && <div className="edu-line" />}
            </div>

            {/* card */}
            <div className={`edu-card ${item.status}`}>
              <div className="edu-card-top">
                <div className="edu-card-left">
                  <h2 className="edu-degree">{item.degree}</h2>
                  <p className="edu-institution">🏛 <span>{item.institution}</span></p>
                  <p className="edu-location">📍 {item.location}</p>
                </div>
                <div className="edu-card-right">
                  <span className="edu-period">{item.period}</span>
                  <span className={`edu-badge ${item.status}`}>
                    {item.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </span>
                </div>
              </div>
              <p className="edu-details">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
