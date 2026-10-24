import { useState } from 'react'

const letters = [
  { ch: 'a', pick: 'vintage', alt: 'vivid', r: -5, y: 0 },
  { ch: 'r', pick: 'vintage', alt: 'vivid', r: 4, y: 14 },
  { ch: 'c', pick: 'vintage', alt: 'vivid', r: -4, y: -6 },
  { ch: 'h', pick: 'vintage', alt: 'vivid', r: 5, y: 10 },
  { ch: 'a', pick: 'vivid', alt: 'vintage', r: -3, y: -8 },
  { ch: 'n', pick: 'vintage', alt: 'vivid', r: 3, y: 12 },
  { ch: 'a', pick: 'vintage', alt: 'vivid', r: 7, y: 0 },
]

export default function RansomName() {
  const [packs, setPacks] = useState(letters.map((l) => l.pick))
  const [spin, setSpin] = useState(letters.map(() => 0))

  const swap = (i) => {
    setPacks((p) => p.map((v, k) => (k === i ? (v === letters[i].pick ? letters[i].alt : letters[i].pick) : v)))
    setSpin((s) => s.map((v, k) => (k === i ? v + 1 : v)))
  }

  return (
    <h1 className="ransom">
      <span className="sr-only">Archana</span>
      {letters.flatMap((l, i) => [
        <button
          key={i}
          type="button"
          className={`cutout ${spin[i] % 2 ? 'flip-a' : spin[i] ? 'flip-b' : ''}`}
          style={{ '--r': `${l.r}deg`, '--y': `${l.y}px`, '--i': i }}
          onClick={() => swap(i)}
          aria-hidden="true"
          tabIndex={-1}
        >
          <img src={`/letters/${packs[i]}-${l.ch}.png`} alt="" draggable="false" />
        </button>,
      ])}
    </h1>
  )
}
