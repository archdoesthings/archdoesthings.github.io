import { useEffect, useState } from 'react'

function embedUrl(link) {
  const m = link?.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist)\/([A-Za-z0-9]+)/)
  return m ? `https://open.spotify.com/embed/${m[1]}/${m[2]}?theme=0` : null
}

function useArt(link, own) {
  const [art, setArt] = useState(own || null)
  useEffect(() => {
    if (own || !link) return
    let alive = true
    fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(link)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (alive && d?.thumbnail_url) setArt(d.thumbnail_url) })
      .catch(() => {})
    return () => { alive = false }
  }, [link, own])
  return art
}

function Cover({ s, i }) {
  const art = useArt(s.link, s.cover)
  if (art) return <img className="cover cover-art" src={art} alt="" loading="lazy" />
  return (
    <svg viewBox="0 0 100 100" className="cover" aria-hidden="true">
      <rect width="100" height="100" fill={s.color} />
      {i % 3 === 0 && <circle cx="70" cy="34" r="22" fill="#090d0c" opacity=".35" />}
      {i % 3 === 1 && Array.from({ length: 6 }, (_, k) => (
        <rect key={k} x="0" y={k * 17} width="100" height="6" fill="#090d0c" opacity=".18" />
      ))}
      {i % 3 === 2 && <path d="M0 100 L100 20 L100 100 Z" fill="#090d0c" opacity=".3" />}
      <text x="8" y="86" className="cover-text">{s.artist.toLowerCase()}</text>
    </svg>
  )
}

export default function Shelf({ songs }) {
  const [pick, setPick] = useState(0)
  const song = songs[pick]
  const src = embedUrl(song.link)

  return (
    <div className="shelf">
      <ul className="cds">
        {songs.map((s, i) => (
          <li key={i}>
            <button
              className={`cd ${pick === i ? 'is-playing' : ''}`}
              onClick={() => setPick(i)}
              aria-pressed={pick === i}
              aria-label={`${s.title} by ${s.artist}`}
            >
              <span className="disc" aria-hidden="true" />
              <span className="cd-case">
                <Cover s={s} i={i} />
              </span>
            </button>
            <p className="cd-title">{s.title}</p>
            <p className="cd-artist">{s.artist}</p>
          </li>
        ))}
      </ul>

      <div className="player">
        <p className="player-label">Now playing</p>
        <p className="player-song"><em>{song.title}</em> {song.artist}</p>
        {src ? (
          <iframe
            key={src}
            title={`${song.title} on Spotify`}
            src={src}
            width="100%"
            height="152"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        ) : (
          <p className="player-empty">Add a Spotify link for this one in data.js and it'll play here.</p>
        )}
        {song.link && (
          <a href={song.link} target="_blank" rel="noreferrer" className="player-link">Open in Spotify</a>
        )}
      </div>
    </div>
  )
}
