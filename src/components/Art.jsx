// little generated pictures for each project until you have screenshots

function rand(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function Network({ seed = 3 }) {
  const r = rand(seed)
  const nodes = Array.from({ length: 34 }, () => ({ x: 20 + r() * 260, y: 20 + r() * 160, s: 1.5 + r() * 4 }))
  const edges = []
  nodes.forEach((a, i) => {
    nodes.forEach((b, j) => {
      if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 58) edges.push([a, b])
    })
  })
  return (
    <>
      {edges.map(([a, b], i) => (
        <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#ffde00" strokeOpacity="0.25" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.s} fill={n.s > 4.5 ? '#e22326' : '#ecebe6'} fillOpacity={n.s > 4.5 ? 1 : 0.75} />
      ))}
    </>
  )
}

function Bars() {
  const cities = [
    ['LDN', 170], ['MAN', 128], ['GLA', 96], ['DUB', 104], ['BHM', 82], ['EDI', 70], ['LIV', 46], ['LDS', 58],
  ]
  return (
    <>
      {cities.map(([c, h], i) => (
        <g key={c}>
          <rect x={22 + i * 34} y={176 - h * 0.85} width="20" height={h * 0.85} fill={c === 'LIV' ? '#e22326' : '#ffde00'} fillOpacity={c === 'LIV' ? 1 : 0.55} />
          <text x={32 + i * 34} y="194" className="art-label" textAnchor="middle">{c}</text>
        </g>
      ))}
    </>
  )
}

function Waveform() {
  const r = rand(11)
  return (
    <>
      {Array.from({ length: 56 }, (_, i) => {
        const h = 8 + Math.abs(Math.sin(i / 4.2)) * 90 * (0.45 + r() * 0.55)
        return <rect key={i} x={12 + i * 5} y={100 - h / 2} width="2.5" height={h} rx="1" fill={i > 36 && i < 44 ? '#e22326' : '#ecebe6'} fillOpacity={0.7} />
      })}
    </>
  )
}

function Graph() {
  const cx = 150, cy = 100
  const ring = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2
    return { x: cx + Math.cos(a) * 78, y: cy + Math.sin(a) * 66 }
  })
  return (
    <>
      {ring.map((p, i) => (
        <path key={i} d={`M${cx} ${cy} Q ${(cx + p.x) / 2 + 18} ${(cy + p.y) / 2 - 18} ${p.x} ${p.y}`} stroke="#ffde00" strokeOpacity="0.45" fill="none" />
      ))}
      <path d={`M${ring[1].x} ${ring[1].y} Q ${cx + 90} ${cy + 20} ${ring[3].x} ${ring[3].y}`} stroke="#e22326" fill="none" strokeDasharray="3 3" />
      {ring.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="7" fill="#111111" stroke="#ecebe6" strokeOpacity="0.8" />
      ))}
      <circle cx={cx} cy={cy} r="16" fill="#3a3a3a" stroke="#e22326" />
    </>
  )
}

function Hand() {
  return (
    <g fill="none" stroke="#ecebe6" strokeOpacity="0.8" strokeWidth="1.4" strokeLinecap="round">
      <path d="M120 170 C 110 140, 108 120, 112 96 L 114 60 M 128 92 L 132 42 M 146 92 L 152 46 M 162 98 L 170 60 M 112 120 C 100 108, 88 104, 82 110" />
      <circle cx="132" cy="42" r="4" fill="#e22326" stroke="none" />
      <circle cx="114" cy="60" r="4" fill="#e22326" stroke="none" />
      <path d="M190 60 a 30 30 0 0 1 0 60 M 204 48 a 48 48 0 0 1 0 84" stroke="#ffde00" strokeOpacity="0.6" />
    </g>
  )
}

function Path() {
  const pts = [[30, 150], [80, 70], [140, 120], [190, 50], [250, 100]]
  return (
    <>
      <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="#ffde00" strokeOpacity="0.7" strokeDasharray="4 4" />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 0 || i === pts.length - 1 ? 10 : 6} fill={i === 0 || i === pts.length - 1 ? '#3a3a3a' : '#111111'} stroke="#ecebe6" strokeOpacity="0.8" />
          <text x={x} y={y + 26} className="art-label" textAnchor="middle">{i}</text>
        </g>
      ))}
    </>
  )
}

const kinds = { network: Network, bars: Bars, waveform: Waveform, graph: Graph, hand: Hand, path: Path }

export default function Art({ kind }) {
  const C = kinds[kind] || Network
  return (
    <svg className="art" viewBox="0 0 300 200" role="img" aria-hidden="true">
      <C />
    </svg>
  )
}
