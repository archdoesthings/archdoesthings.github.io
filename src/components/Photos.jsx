import { useRef, useState } from 'react'

const tilts = [-3, 2, -1.5, 3, -2.5, 1.5, -1, 2.5]
const tones = [
  ['#1a1a1a', '#bdbdbd'],
  ['#111111', '#ffde00'],
  ['#202020', '#e22326'],
  ['#151515', '#ecebe6'],
  ['#1c1c1c', '#8d8d8a'],
  ['#121212', '#ffde00'],
]

function Placeholder({ i }) {
  const [a, b] = tones[i % tones.length]
  return (
    <div className="photo-ph" style={{ background: `radial-gradient(circle at ${30 + (i * 17) % 50}% ${35 + (i * 23) % 40}%, ${b}55, ${a} 70%)` }}>
      <span>frame {String(i + 1).padStart(2, '0')}</span>
    </div>
  )
}

export default function Photos({ photos }) {
  const dialog = useRef(null)
  const [active, setActive] = useState(null)

  const open = (i) => {
    setActive(i)
    dialog.current?.showModal()
  }

  const p = active !== null ? photos[active] : null

  return (
    <>
      <div className="photo-wall">
        {photos.map((ph, i) => (
          <button
            key={i}
            className="photo"
            style={{ '--tilt': `${tilts[i % tilts.length]}deg` }}
            onClick={() => open(i)}
            aria-label={`Open photo: ${ph.caption}`}
          >
            {ph.src ? <img src={ph.src} alt={ph.caption} loading="lazy" /> : <Placeholder i={i} />}
            <span className="photo-cap">
              {ph.caption}
              {ph.where && <small>{ph.where}</small>}
            </span>
          </button>
        ))}
      </div>

      <dialog ref={dialog} className="lightbox" onClick={(e) => e.target === dialog.current && dialog.current.close()}>
        {p && (
          <figure>
            {p.src ? <img src={p.src} alt={p.caption} /> : <Placeholder i={active} />}
            <figcaption>
              {p.caption}
              {p.where && <small>{p.where}</small>}
            </figcaption>
          </figure>
        )}
        <button className="lightbox-close" onClick={() => dialog.current.close()} aria-label="Close">×</button>
      </dialog>
    </>
  )
}
