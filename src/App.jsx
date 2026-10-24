import { useEffect, useState } from 'react'
import RansomName from './components/RansomName.jsx'
import Wall from './components/Wall.jsx'
import Desk from './components/Desk.jsx'
import Clippings from './components/Clippings.jsx'
import Photos from './components/Photos.jsx'
import Shelf from './components/Shelf.jsx'
import Tickets from './components/Tickets.jsx'
import Weather from './components/Weather.jsx'
import { Route, Glance } from './components/Side.jsx'
import { me, tracks, experience, education, about, photos, songs, movies } from './data.js'

// each page lives at #/name so it works on github pages without extra setup
const pages = [
  { id: 'projects', label: 'Projects', title: "Things I've made" },
  { id: 'experience', label: 'Experience', title: "Where I've been" },
  { id: 'off-the-clock', label: 'Off the clock', title: 'Off the clock' },
  { id: 'contact', label: 'Contact', title: 'Get in touch' },
]

function useRoute() {
  const read = () => {
    const id = location.hash.replace(/^#\/?/, '')
    return pages.some((p) => p.id === id) ? id : 'home'
  }
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const change = () => {
      setRoute(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', change)
    return () => window.removeEventListener('hashchange', change)
  }, [])
  useEffect(() => {
    const p = pages.find((x) => x.id === route)
    document.title = p ? `${p.title} | Archana` : 'Archana | data & software'
  }, [route])
  return route
}

function Links({ email = true }) {
  return (
    <div className="stickers">
      <a href={me.cv.data} target="_blank" rel="noreferrer" className="sticker-link yellow">Data analyst CV</a>
      <a href={me.cv.dev} target="_blank" rel="noreferrer" className="sticker-link yellow">Developer CV</a>
      <a href={me.github} target="_blank" rel="noreferrer" className="sticker-link black">GitHub</a>
      <a href={me.linkedin} target="_blank" rel="noreferrer" className="sticker-link white">LinkedIn</a>
      {email && <a href={`mailto:${me.email}`} className="sticker-link red">Email me</a>}
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <Desk />
        <RansomName />
        <Wall />
        <figure className="panel">
          <img src="/punk/yellow.jpg" alt="Archana in sunglasses, printed as a yellow halftone" />
          <figcaption>NO NULLS</figcaption>
        </figure>
        <figure className="figure">
          <img src="/punk/front.png" alt="Archana, photocopied cut-out" />
          <span className="censor" aria-hidden="true">DATA ANALYST</span>
        </figure>
      </section>

      <section className="intro">
        <div className="intro-row">
          <div>
            <p className="lede">{me.intro}</p>
            <p>{me.tools}</p>
            <Weather />
            <Links />
          </div>
          <figure className="print">
            <img src="/punk/selfie.webp" alt="Archana smiling in a booth lit by red and green lights" />
            <figcaption>hi, it's me!</figcaption>
          </figure>
          <figure className="polaroid">
            <img src="/punk/strawberry.webp" alt="Archana leaning on the red Strawberry Field gates in Liverpool" />
            <figcaption>all you need is love. and a photo at every beatles landmark</figcaption>
          </figure>
        </div>
      </section>

      <nav className="next" aria-label="Pages">
        {pages.slice(0, 3).map((p) => (
          <a key={p.id} href={`#/${p.id}`} className="next-link">
            <span>{p.title}</span>
          </a>
        ))}
      </nav>
    </>
  )
}

function Projects() {
  return (
    <section className="block dark page">
      <h1 className="page-title">Things I've made</h1>
      <p className="block-sub">Photocopied and pinned up. Click one to read about it.</p>
      <Clippings tracks={tracks} />
    </section>
  )
}

function Timeline({ items }) {
  return (
    <div className="sheet">
      <ol className="timeline">
        {items.map((x) => (
          <li key={x.what + x.where}>
            <span className="when">{x.when}</span>
            <div>
              <p className="what">{x.what}</p>
              <p className="where">{x.where}</p>
              {x.note && <p className="note-line">{x.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Experience() {
  return (
    <section className="block page">
      <h1 className="page-title">Where I've been</h1>
      <div className="exp-grid">
        <div>
          <h2 className="sheet-head">Work</h2>
          <Timeline items={experience} />
          <h2 className="sheet-head">Education</h2>
          <Timeline items={education} />
          <div className="about">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <aside className="exp-side">
          <Route />
          <Glance />
        </aside>
      </div>
    </section>
  )
}

function OffTheClock() {
  return (
    <section className="block dark page">
      <h1 className="page-title">Off the clock</h1>

      <div className="hobby">
        <div className="hobby-head">
          <h3>Photos I've taken</h3>
        </div>
        <div className="flash-feature">
          <figure className="flash-print">
            <img src="/punk/flash.webp" alt="Archana taking a photo with a digicam, flash firing" />
          </figure>
          <p className="flash-note">I'm usually behind the camera, not in front of it</p>
        </div>
        <Photos photos={photos} />
      </div>

      <div className="hobby">
        <h3>Songs on repeat</h3>
        <Shelf songs={songs} />
      </div>

      <div className="hobby">
        <h3>Films I'd rewatch tonight</h3>
        <p className="theme-note">space, aliens and one murder. i'm sensing a theme</p>
        <Tickets movies={movies} />
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact page">
      <h1 className="page-title">Get in touch</h1>
      <p>Hiring for a data or developer role, or just want to send me a song? Email me.</p>
      <a className="mail" href={`mailto:${me.email}`}>{me.email.split('@')[0]}<wbr />@{me.email.split('@')[1]}</a>
      <Links email={false} />
    </section>
  )
}

const views = { home: Home, projects: Projects, experience: Experience, 'off-the-clock': OffTheClock, contact: Contact }

export default function App() {
  const route = useRoute()
  const View = views[route]

  return (
    <>
      <header className="top">
        <a href="#/" className="top-name">archdoesthings</a>
        <nav aria-label="Sections">
          {pages.map((p) => (
            <a key={p.id} href={`#/${p.id}`} aria-current={route === p.id ? 'page' : undefined}>
              {p.label}
            </a>
          ))}
        </nav>
      </header>

      <main key={route}>
        <View />
      </main>

      <footer className="foot">
        <p>Made by {me.name} in Liverpool.</p>
        <p>Cut-out letters by Freepik.</p>
      </footer>
    </>
  )
}
