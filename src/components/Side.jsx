// the side column on the experience page
export function Route() {
  const ink = { fill: 'none', stroke: '#111', strokeWidth: 3, strokeLinecap: 'round' }
  const pin = (x, y) => (
    <g transform={`translate(${x} ${y})`}>
      <path fill="#e22326" stroke="#111" strokeWidth="2.5" d="M0 0 C -12 -14, -10 -30, 0 -30 C 10 -30, 12 -14, 0 0 Z" />
      <circle cx="0" cy="-19" r="4" fill="#f6f4ee" />
    </g>
  )
  return (
    <figure className="side route">
      <p className="side-title">the route so far</p>
      <svg viewBox="0 0 340 380" role="img" aria-label="India, then Dubai, then Liverpool">
        <path {...ink} strokeDasharray="2 9" d="M250 320 C 200 300, 150 300, 120 250 S 120 150, 190 120 S 120 60, 90 60" />
        <path {...ink} d="M84 52 l12 10 M96 52 l-12 10" stroke="#e22326" />
        {pin(250, 320)}
        {pin(120, 250)}
        {pin(90, 56)}
        <text x="250" y="348" textAnchor="middle" className="route-place">India</text>
        <text x="250" y="368" textAnchor="middle" className="route-note">where i'm from</text>
        <text x="140" y="236" className="route-place">Dubai</text>
        <text x="140" y="256" className="route-note">grew up, BSc,</text>
        <text x="140" y="274" className="route-note">2 internships</text>
        <text x="110" y="36" className="route-place">Liverpool</text>
        <text x="110" y="56" className="route-note">MSc</text>
      </svg>
    </figure>
  )
}

export function Glance() {
  const stats = [
    { n: '3', l: 'internships' },
    { n: '2', l: 'degrees' },
    { n: '9.19', l: 'BSc CGPA, out of 10' },
    { n: '3', l: 'countries called home' },
  ]
  return (
    <div className="side glance">
      <p className="side-title">at a glance</p>
      <dl>
        {stats.map((s) => (
          <div key={s.l}>
            <dd>{s.n}</dd>
            <dt>{s.l}</dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
