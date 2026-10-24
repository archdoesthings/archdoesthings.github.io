// the pile of stuff in the hero. photos are pre-cut images in public/punk
// positions live in src/deskLayout.json. run the dev server and open /?edit to move things
import { useEffect, useRef, useState } from 'react'
import saved from '../deskLayout.json'

function SdCard() {
  return (
    <svg viewBox="0 0 80 104" aria-hidden="true">
      <path d="M8 4 H58 L76 22 V98 H8 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
      <rect x="14" y="40" width="56" height="34" fill="#ffde00" />
      <text x="42" y="63" textAnchor="middle" fontFamily="Anton, Impact, sans-serif" fontSize="17" fill="#111">64GB</text>
      <g fill="#c9a24a">
        <rect x="18" y="8" width="6" height="14" /><rect x="28" y="8" width="6" height="14" /><rect x="38" y="8" width="6" height="14" /><rect x="48" y="8" width="6" height="14" />
      </g>
    </svg>
  )
}

const items = [
  { id: 'laptop', label: 'Laptop', src: '/punk/laptop.webp', cls: 'd-laptop', href: '#/projects', go: 'See my projects' },
  { id: 'headphones', label: 'XM5s', src: '/punk/xm5.webp', cls: 'd-headphones', href: '#/off-the-clock?go=music', go: 'Songs on repeat' },
  { id: 'coffee', label: 'Dolce Gusto', src: '/punk/dolce.webp', cls: 'd-coffee', note: "can't live without it" },
  { id: 'cap', label: 'Cap', src: '/punk/cap.webp', cls: 'd-cap', note: 'fav cap ever' },
  { id: 'earphones', label: 'Earphones', src: '/punk/earphones.webp', cls: 'd-earphones', href: '#/off-the-clock?go=music', go: 'Songs on repeat' },
  { id: 'snoopy', label: 'Snoopy', src: '/punk/snoopy.webp', cls: 'd-snoopy', note: 'avid plushy collector' },
  { id: 'sd', label: 'SD card', C: SdCard, cls: 'd-sd', href: '#/off-the-clock?go=photos', go: "Photos I've taken" },
  { id: 'digicam', label: 'Cyber-shot', src: '/punk/cybershot.webp', cls: 'd-digicam', href: '#/off-the-clock?go=photos', go: "Photos I've taken" },
]

const editing = import.meta.env.DEV && new URLSearchParams(location.search).has('edit')
const round = (n) => Math.round(n * 10) / 10

function Editor({ layout, setLayout, sel, setSel }) {
  const [msg, setMsg] = useState('')
  const it = items.find((x) => x.id === sel)
  const v = sel && layout[sel]
  const set = (patch) => setLayout((L) => ({ ...L, [sel]: { ...L[sel], ...patch } }))
  const zs = Object.values(layout).map((x) => x.z)

  const save = async () => {
    setMsg('saving...')
    try {
      const r = await fetch('/__desk-layout', { method: 'POST', body: JSON.stringify(layout) })
      setMsg(r.ok ? 'saved to src/deskLayout.json' : 'save failed: ' + (await r.text()))
    } catch (e) {
      setMsg('save failed: ' + e.message)
    }
  }

  return (
    <div className="desk-editor">
      <p className="de-title">Edit the pile</p>
      <p className="de-help">Drag to move. Scroll to resize, shift + scroll to rotate. Arrow keys nudge, [ and ] rotate.</p>
      <label className="de-row">
        <span>Item</span>
        <select value={sel || ''} onChange={(e) => setSel(e.target.value || null)}>
          <option value="">pick one</option>
          {items.map((x) => <option key={x.id} value={x.id}>{x.label}{layout[x.id].hidden ? ' (hidden)' : ''}</option>)}
        </select>
      </label>
      {v && (
        <>
          <label className="de-row">
            <span>Size</span>
            <input type="range" min="4" max="100" step="0.5" value={v.w} onChange={(e) => set({ w: +e.target.value })} />
            <output>{v.w}%</output>
          </label>
          <label className="de-row">
            <span>Rotate</span>
            <input type="range" min="-60" max="60" step="1" value={v.r} onChange={(e) => set({ r: +e.target.value })} />
            <output>{v.r}°</output>
          </label>
          <div className="de-row">
            <span>Layer</span>
            <button type="button" onClick={() => set({ z: Math.min(...zs) - 1 })}>Send to back</button>
            <button type="button" onClick={() => set({ z: Math.max(...zs) + 1 })}>Bring to front</button>
          </div>
          <label className="de-row de-check">
            <input type="checkbox" checked={!!v.hidden} onChange={(e) => set({ hidden: e.target.checked || undefined })} />
            <span>Hide {it.label}</span>
          </label>
        </>
      )}
      <div className="de-actions">
        <button type="button" className="de-save" onClick={save}>Save layout</button>
        <button type="button" onClick={() => { setLayout(saved); setMsg('back to the last save') }}>Undo changes</button>
      </div>
      {msg && <p className="de-msg">{msg}</p>}
    </div>
  )
}

export default function Desk() {
  const [layout, setLayout] = useState(saved)
  const [sel, setSel] = useState(null)
  const [noted, setNoted] = useState(null)
  const [hover, setHover] = useState(null)
  const timer = useRef(null)
  const showNote = (id) => {
    clearTimeout(timer.current)
    setNoted((n) => (n === id ? null : id))
    timer.current = setTimeout(() => setNoted(null), 2600)
  }
  useEffect(() => () => clearTimeout(timer.current), [])
  const desk = useRef(null)
  const drag = useRef(null)

  useEffect(() => {
    if (!editing || !sel) return
    const key = (e) => {
      if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return
      const step = e.shiftKey ? 2 : 0.5
      const d = { ArrowLeft: ['l', -step], ArrowRight: ['l', step], ArrowUp: ['t', -step], ArrowDown: ['t', step], '[': ['r', -1], ']': ['r', 1] }[e.key]
      if (!d) return
      e.preventDefault()
      setLayout((L) => ({ ...L, [sel]: { ...L[sel], [d[0]]: round(L[sel][d[0]] + d[1]) } }))
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [sel])

  const down = (id) => (e) => {
    if (!editing) return
    e.preventDefault()
    setSel(id)
    const box = desk.current.getBoundingClientRect()
    drag.current = { id, x: e.clientX, y: e.clientY, l: layout[id].l, t: layout[id].t, w: box.width, h: box.height }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const move = (e) => {
    const d = drag.current
    if (!d) return
    const l = round(d.l + ((e.clientX - d.x) / d.w) * 100)
    const t = round(d.t + ((e.clientY - d.y) / d.h) * 100)
    setLayout((L) => ({ ...L, [d.id]: { ...L[d.id], l, t } }))
  }
  const up = () => { drag.current = null }
  // react's wheel handler is passive, so attach our own to stop the page scrolling while resizing
  const selRef = useRef(sel)
  selRef.current = sel
  useEffect(() => {
    if (!editing) return
    const el = desk.current
    const wheel = (e) => {
      const id = e.target.closest('[data-id]')?.dataset.id
      if (!id || id !== selRef.current) return
      e.preventDefault()
      const dir = e.deltaY > 0 ? -1 : 1
      setLayout((L) => {
        const v = L[id]
        return { ...L, [id]: e.shiftKey ? { ...v, r: v.r + dir * 2 } : { ...v, w: round(Math.max(4, Math.min(100, v.w + dir))) } }
      })
    }
    el.addEventListener('wheel', wheel, { passive: false })
    return () => el.removeEventListener('wheel', wheel)
  }, [])

  return (
    <>
      <div ref={desk} className={`desk ${editing ? 'desk-editing' : ''} ${hover || noted ? 'has-note' : ''}`}>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <filter id="xerox" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="4" result="n" />
            <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.35" result="specks" />
            <feComposite in="specks" in2="SourceAlpha" operator="in" result="grain" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="grain" />
            </feMerge>
          </filter>
        </svg>
        {items.map(({ id, label, src, C, cls, href, go, note }) => {
          const v = layout[id]
          if (!v || (v.hidden && !editing)) return null
          const style = { '--l': `${v.l}%`, '--t': `${v.t}%`, '--w': `${v.w}%`, '--rot': `${v.r}deg`, '--z': v.z }
          if (!editing && (href || note)) {
            const kids = src ? <img src={src} alt="" draggable="false" /> : <C />
            const cn = `desk-item ${src ? 'desk-photo' : ''} desk-live ${cls}`
            const on = { onMouseEnter: () => setHover(id), onMouseLeave: () => setHover(null), onFocus: () => setHover(id), onBlur: () => setHover(null) }
            return href ? (
              <a key={id} href={href} className={cn} style={style} aria-label={`${label}: ${go}`} {...on}>{kids}</a>
            ) : (
              <button key={id} type="button" className={cn} style={style} aria-label={`${label}: ${note}`} onClick={() => showNote(id)} {...on}>{kids}</button>
            )
          }
          const props = {
            'data-id': id,
            style,
            className: `desk-item ${src ? 'desk-photo' : ''} ${cls} ${sel === id ? 'is-selected' : ''} ${v.hidden ? 'is-hidden' : ''}`,
            onPointerDown: down(id),
            onPointerMove: move,
            onPointerUp: up,
          }
          return src ? <img key={id} {...props} src={src} alt="" draggable="false" /> : <span key={id} {...props} aria-hidden="true"><C /></span>
        })}
        {!editing && (() => {
          const id = hover || noted
          const it = items.find((x) => x.id === id)
          const v = id && layout[id]
          if (!it || !v) return null
          return (
            <span
              key={id}
              className={`desk-note ${it.href ? 'is-link' : ''}`}
              style={{ left: `${v.w < 15 ? v.l + v.w + 1 : v.l + v.w * 0.55}%`, top: `${Math.max(v.t, -4)}%` }}
              aria-hidden="true"
            >
              {it.note || it.go}
            </span>
          )
        })()}
      </div>
      {editing && <Editor layout={layout} setLayout={setLayout} sel={sel} setSel={setSel} />}
    </>
  )
}
