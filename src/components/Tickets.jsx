import { useRef, useState } from 'react'
import Doodle from './Doodle.jsx'

const tilts = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.8]
const papers = ['#ffde00', '#f6f4ee', '#e9e7e0', '#ffde00', '#f6f4ee', '#ffde00', '#e9e7e0', '#f6f4ee']

// tally marks in groups of five
function Tally({ n }) {
  const groups = Array.from({ length: Math.ceil(n / 5) }, (_, g) => Math.min(5, n - g * 5))
  return (
    <svg className="tally" viewBox={`0 0 ${groups.length * 34} 26`} role="img" aria-label={`seen ${n} times`}>
      {groups.map((k, g) => (
        <g key={g} transform={`translate(${g * 34} 0)`}>
          {Array.from({ length: Math.min(k, 4) }, (_, i) => (
            <path key={i} d={`M${4 + i * 6} 3 l${i % 2 ? 1 : -1} 20`} />
          ))}
          {k === 5 && <path d="M0 18 L28 6" />}
        </g>
      ))}
    </svg>
  )
}

export default function Tickets({ movies }) {
  const [torn, setTorn] = useState({})
  const [printed, setPrinted] = useState(null)
  const [flash, setFlash] = useState(null)
  const cards = useRef([])

  const tear = (i) => setTorn((t) => ({ ...t, [i]: true }))
  const anyTorn = Object.values(torn).some(Boolean)

  const pick = () => {
    let i = Math.floor(Math.random() * movies.length)
    if (movies.length > 1 && i === printed?.i) i = (i + 1) % movies.length
    setPrinted({ i, key: Date.now() })
    setTimeout(() => {
      tear(i)
      setFlash(i)
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      cards.current[i]?.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'center' })
    }, 900)
  }

  const ranked = [...movies].sort((a, b) => b.seen - a.seen)
  const most = ranked[0].seen

  return (
    <>
      <div className="films-top">
      <div className="machine">
        <div className="machine-box">
          <p className="machine-label">ticket machine</p>
          <button type="button" className="machine-btn" onClick={pick}>can't pick? let me choose</button>
          <span className="machine-slot" aria-hidden="true" />
        </div>
        <div className="machine-out" aria-live="polite">
          {printed && (
            <p key={printed.key} className="printed">
              <span>tonight:</span> {movies[printed.i].title}
            </p>
          )}
        </div>
        {anyTorn && (
          <button type="button" className="reseal" onClick={() => { setTorn({}); setPrinted(null); setFlash(null) }}>
            stick the tickets back on
          </button>
        )}
      </div>

      <div className="rewatch">
        <p className="rewatch-title">Most rewatched</p>
        <ol>
          {ranked.map((m) => (
            <li key={m.title} className={m.seen === most ? 'is-top' : ''}>
              <span className="rw-name">{m.title}</span>
              <span className="rw-bar" style={{ '--w': `${(m.seen / most) * 100}%` }} />
              <span className="rw-n">{m.seen}</span>
            </li>
          ))}
        </ol>
      </div>
      </div>

      <ul className="films">
        {movies.map((m, i) => (
          <li
            key={m.title}
            ref={(el) => (cards.current[i] = el)}
            className={`film ${torn[i] ? 'is-torn' : ''} ${flash === i ? 'is-picked' : ''}`}
            style={{ '--tilt': `${tilts[i % tilts.length]}deg` }}
          >
            <div className="film-poster" style={{ background: papers[i % papers.length] }}>
              <span className="film-tape" aria-hidden="true" />
              <Doodle title={m.title} />
            </div>

            <div className="film-ticket">
              <div className="ticket" aria-hidden={!torn[i]}>
                <div className="ticket-main">
                  <p className="ticket-title">{m.title}</p>
                  <p className="ticket-note">{m.note}</p>
                  <p className="ticket-seen">seen <Tally n={m.seen} /></p>
                </div>
                <div className="ticket-stub"><span>{m.year}</span></div>
              </div>
              <button
                type="button"
                className="ticket-cover"
                onClick={() => tear(i)}
                tabIndex={torn[i] ? -1 : 0}
                aria-hidden={!!torn[i]}
                aria-label={`Film ${i + 1}: guess it, then tear to check`}
              >
                <span className="cover-q">?????</span>
                <span className="cover-tear">guess it, then tear here</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
