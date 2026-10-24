// the wall of clippings in the hero, sorted into three groups. edit freely
const tools = [
  { t: 'SQL', k: 'yellow big' },
  { t: 'PYTHON', k: 'black big' },
  { t: 'pandas', k: 'white' },
  { t: 'REACT', k: 'white big' },
  { t: 'POWER BI', k: 'red' },
  { t: 'FLASK', k: 'black' },
  { t: 'node2vec', k: 'type' },
]

const me = [
  { t: 'FROM INDIA', k: 'red' },
  { t: 'made in Dubai', k: 'serif' },
  { t: 'now in rainy Liverpool', k: 'type' },
  { t: 'NEVER WITHOUT HEADPHONES', k: 'black' },
]

const tilts = [-3, 2, -1, 3, -2, 1.5, -2.5]

function Scraps({ list }) {
  return list.map((s, i) => (
    <span key={s.t} className={`scrap ${s.k}`} style={{ '--t': `${tilts[i % tilts.length]}deg` }}>
      {s.t}
    </span>
  ))
}

export default function Wall() {
  return (
    <div className="wall">
      <div className="wall-group">
        <p className="wall-label">I use</p>
        <Scraps list={tools} />
      </div>

      <div className="wall-group">
        <p className="wall-label">I made</p>
        <a href="#/projects?show=dissertation" className="news">
          <span className="news-tag">MSc dissertation</span>
          <span className="news-head">Mapped 1,520 Wikipedia astronomy pages and the 10,103 links between them</span>
          <span className="news-more">read it on the projects page</span>
        </a>
      </div>

      <div className="wall-group wall-me">
        <p className="wall-label">I'm</p>
        <Scraps list={me} />
      </div>
    </div>
  )
}
