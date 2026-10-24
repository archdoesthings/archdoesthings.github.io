import { useEffect, useRef, useState } from 'react'
import Art from './Art.jsx'

const tilts = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9, -1.9]
const pins = ['#e22326', '#ffde00', '#111111']

function Case({ t, caseRef }) {
  return (
    <article className="case" id="case" aria-live="polite" ref={caseRef}>
      <span className="case-tape" aria-hidden="true" />
      <p className="case-tag">{t.tag}</p>
      <h3>{t.title}</h3>
      <div className="case-body">
        <p className="case-q">{t.question}</p>
        <div>
          {t.asks && (
            <ul className="case-asks">
              {t.asks.map((a) => <li key={a}>{a}</li>)}
            </ul>
          )}
          <p>{t.did}</p>
          {t.stats.length > 0 && (
            <dl className="case-stats">
              {t.stats.map((s) => (
                <div key={s.l}>
                  <dd>{s.n}</dd>
                  <dt>{s.l}</dt>
                </div>
              ))}
            </dl>
          )}
          {t.found && <p className="case-found">{t.found}</p>}
          <p className="case-stack">Built with {t.stack.join(', ')}.</p>
          {t.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="case-link">
              {l.label === 'code' ? 'See the code on GitHub' : l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Clippings({ tracks }) {
  // #/projects?show=<id> opens that card straight away
  const asked = new URLSearchParams(location.hash.split('?')[1]).get('show')
  const start = Math.max(0, tracks.findIndex((t) => t.id && t.id === asked))
  const [open, setOpen] = useState(start)
  const caseRef = useRef(null)
  const clicked = useRef(!!asked)

  // only scroll after a click, not on first load
  useEffect(() => {
    if (!clicked.current) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    caseRef.current?.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' })
  }, [open])

  return (
    <div className="clippings">
      <ul className="board">
        {tracks.map((t, i) => (
          <li key={i} style={{ '--tilt': `${tilts[i % tilts.length]}deg` }}>
            <button
              className={`clip ${open === i ? 'is-open' : ''}`}
              onClick={() => { clicked.current = true; setOpen(i) }}
              aria-expanded={open === i}
              aria-controls="case"
            >
              <span className="pin" style={{ background: pins[i % pins.length] }} aria-hidden="true" />
              <span className="clip-art"><Art kind={t.art} /></span>
              <span className="clip-tag">{t.side === 'A' ? 'data' : 'software'}, {t.tag}</span>
              <span className="clip-title">{t.title}</span>
            </button>
          </li>
        ))}
      </ul>
      <Case t={tracks[open]} caseRef={caseRef} />
    </div>
  )
}
