import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Camera() {
  const [frames, setFrames] = useState(24)
  const [flash, setFlash] = useState(0)

  const shoot = () => {
    setFrames((f) => (f <= 1 ? 24 : f - 1))
    setFlash((n) => n + 1)
  }

  return (
    <div className="camera-wrap">
      {flash > 0 && createPortal(<div key={flash} className="flash" aria-hidden="true" />, document.body)}

      <button className="camera-btn" onClick={shoot} aria-label="Take a picture" title="Take a picture">
        <svg className="camera" viewBox="0 0 480 330">
          <defs>
            <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ded5c6" />
              <stop offset="55%" stopColor="#a69d8f" />
              <stop offset="100%" stopColor="#7d7569" />
            </linearGradient>
            <pattern id="leather" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#141a18" />
              <circle cx="1.5" cy="1.5" r="0.9" fill="#1c2421" />
              <circle cx="4.5" cy="4.2" r="0.7" fill="#0d1110" />
            </pattern>
            <radialGradient id="glass" cx="38%" cy="34%" r="70%">
              <stop offset="0%" stopColor="#3e5a5a" />
              <stop offset="35%" stopColor="#162221" />
              <stop offset="75%" stopColor="#0b0809" />
              <stop offset="100%" stopColor="#000" />
            </radialGradient>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e6ddcd" />
              <stop offset="50%" stopColor="#7d7569" />
              <stop offset="100%" stopColor="#cfc6b6" />
            </linearGradient>
          </defs>

          {/* strap */}
          <path d="M44 120 C 10 160, 6 260, 40 330" stroke="#24332f" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M436 120 C 470 160, 474 260, 440 330" stroke="#24332f" strokeWidth="9" fill="none" strokeLinecap="round" />

          {/* top bits */}
          <rect x="320" y="52" width="58" height="22" rx="5" fill="url(#plate)" />
          <rect className="shutter" x="336" y="40" width="26" height="14" rx="5" fill="#34504a" />
          <rect x="96" y="60" width="78" height="14" rx="3" fill="url(#plate)" />

          {/* body */}
          <rect x="40" y="72" width="400" height="230" rx="26" fill="url(#leather)" />
          <path d="M66 72 H414 A26 26 0 0 1 440 98 V128 H40 V98 A26 26 0 0 1 66 72 Z" fill="url(#plate)" />
          <rect x="40" y="276" width="400" height="26" rx="12" fill="#cfc6b6" opacity=".18" />

          {/* viewfinder, flash, timer light */}
          <rect x="66" y="86" width="56" height="30" rx="5" fill="#0a0d0d" stroke="#5f584f" strokeWidth="2" />
          <rect x="72" y="91" width="20" height="9" rx="2" fill="#e9b863" opacity=".25" />
          <rect x="144" y="84" width="84" height="34" rx="4" fill="#efe8dc" stroke="#6b6358" strokeWidth="2" />
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={152 + i * 8.5} y1="88" x2={152 + i * 8.5} y2="114" stroke="#b9b0a2" strokeWidth="1.4" />
          ))}
          <circle className="timer" cx="404" cy="101" r="7" fill="#d39ca3" />

          {/* frame counter */}
          <rect x="250" y="88" width="70" height="26" rx="4" fill="#141a18" />
          <text x="285" y="106" textAnchor="middle" className="counter">{String(frames).padStart(2, '0')} exp</text>

          {/* lens */}
          <g className="lens">
            <circle cx="240" cy="200" r="92" fill="#0b0f0e" />
            <circle cx="240" cy="200" r="86" fill="url(#ring)" />
            <circle cx="240" cy="200" r="76" fill="#121816" />
            {Array.from({ length: 36 }, (_, i) => {
              const a = (i / 36) * Math.PI * 2
              return (
                <line
                  key={i}
                  x1={240 + Math.cos(a) * 77}
                  y1={200 + Math.sin(a) * 77}
                  x2={240 + Math.cos(a) * 85}
                  y2={200 + Math.sin(a) * 85}
                  stroke="#3a4440"
                  strokeWidth="2"
                />
              )
            })}
            <circle cx="240" cy="200" r="64" fill="#0a0808" stroke="#2a332f" strokeWidth="3" />
            <circle cx="240" cy="200" r="54" fill="url(#glass)" />
            <circle cx="240" cy="200" r="30" fill="none" stroke="#d39ca3" strokeOpacity=".22" strokeWidth="2" />
            <circle cx="240" cy="200" r="18" fill="none" stroke="#e9b863" strokeOpacity=".15" strokeWidth="2" />
            <g transform="rotate(-35 218 178)">
              <ellipse className="glint" cx="218" cy="178" rx="16" ry="9" fill="#f6e7cf" opacity=".45" />
            </g>
            <circle cx="262" cy="224" r="5" fill="#e9b863" opacity=".5" />
            <text className="lens-text">
              <textPath href="#lensArc">ARCHDOESTHINGS · 35mm f/2.8 ·</textPath>
            </text>
            <path id="lensArc" d="M 240 200 m -70 0 a 70 70 0 1 1 140 0 a 70 70 0 1 1 -140 0" fill="none" />
          </g>

          <text x="70" y="290" className="brand">archana</text>
        </svg>
      </button>
    </div>
  )
}
