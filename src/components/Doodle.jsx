// little hint drawings for the guess the film game. all hand drawn shapes, nothing traced
const ink = { fill: 'none', stroke: '#111', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }

const doodles = {
  // a desk with someone standing on it
  'Dead Poets Society': (
    <>
      <path {...ink} d="M22 92 H98 M28 92 V124 M92 92 V124 M22 86 H98 V92" />
      <circle {...ink} cx="60" cy="38" r="8" />
      <path {...ink} d="M60 46 V68 M60 52 L44 40 M60 52 L76 40 M60 68 L52 86 M60 68 L68 86" />
      <path {...ink} d="M30 24 l4 -6 M88 22 l-3 -7 M96 36 l6 -3" />
    </>
  ),
  // hourglass and a ringed planet
  Interstellar: (
    <>
      <path {...ink} d="M24 30 H62 M24 118 H62 M28 30 C28 62 58 62 58 74 C58 86 28 86 28 118 M58 30 C58 62 28 62 28 74 C28 86 58 86 58 118" />
      <path fill="#111" d="M36 112 Q43 96 50 112 Z" />
      <circle {...ink} cx="88" cy="54" r="14" />
      <ellipse {...ink} cx="88" cy="56" rx="26" ry="7" transform="rotate(-18 88 56)" />
    </>
  ),
  // a dimming sun and a tiny ship heading for it
  'Project Hail Mary': (
    <>
      <circle {...ink} cx="70" cy="56" r="24" />
      <path {...ink} strokeDasharray="4 6" d="M70 20 V8 M70 92 V104 M34 56 H22 M106 56 H118 M45 31 L37 23 M95 81 L103 89 M95 31 L103 23 M45 81 L37 89" />
      <path {...ink} d="M94 56 C 104 60, 98 70, 110 76" />
      <path {...ink} d="M24 122 L40 114 L36 126 Z" />
      <path {...ink} strokeDasharray="2 5" d="M42 118 C 52 106, 52 96, 60 84" />
    </>
  ),
  // a boat that's sailed into the sky, with stairs up to a door
  'The Truman Show': (
    <>
      <path {...ink} d="M24 34 c0 -8 12 -10 16 -4 c4 -6 16 -4 14 4 c4 2 2 8 -4 8 h-22 c-6 0 -8 -6 -4 -8 Z" />
      <path {...ink} d="M62 20 c2 -6 12 -6 13 0 c6 -2 10 6 4 8 h-15 c-5 0 -6 -6 -2 -8 Z" />
      <rect {...ink} x="88" y="44" width="22" height="34" />
      <circle fill="#111" cx="104" cy="62" r="2" />
      <path {...ink} d="M58 102 H66 V95 H74 V88 H82 V81 H90 V78" />
      <path {...ink} d="M12 98 H46 L40 107 H18 Z" />
      <path {...ink} d="M30 98 V58 L50 92 H30" />
      <path {...ink} d="M4 114 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" />
    </>
  ),
  // a dodgy id card
  Superbad: (
    <>
      <rect {...ink} x="14" y="40" width="92" height="58" rx="6" />
      <rect {...ink} x="22" y="50" width="28" height="34" />
      <circle {...ink} cx="36" cy="62" r="6" />
      <path {...ink} d="M27 82 C 30 72, 42 72, 45 82" />
      <path {...ink} d="M58 56 H96 M58 68 H88 M58 80 H80" />
      <path stroke="#e22326" strokeWidth="3" fill="none" d="M62 100 L100 30" />
      <text x="60" y="122" textAnchor="middle" fontFamily="Special Elite, monospace" fontSize="13" fill="#111">age: definitely 25</text>
    </>
  ),
  // a striped tent and a top hat
  'The Greatest Showman': (
    <>
      <path {...ink} d="M16 108 L36 52 L60 30 L84 52 L104 108 Z" />
      <path {...ink} d="M60 30 V20 L72 24 L60 28 M48 108 L60 52 L72 108 M36 52 L48 108 M84 52 L72 108" />
      <path {...ink} d="M50 108 C 54 92, 66 92, 70 108" />
      <path {...ink} d="M80 122 H112 M86 122 V104 H106 V122" />
    </>
  ),
  // magnifying glass over a knife
  'Knives Out': (
    <>
      <path {...ink} d="M44 96 L100 30 L96 50 L52 104 Z" />
      <path {...ink} d="M38 90 L58 110" />
      <path {...ink} strokeWidth="8" d="M46 102 L26 122" />
      <circle {...ink} cx="54" cy="52" r="22" />
      <path {...ink} strokeWidth="5" d="M38 68 L20 86" />
      <path {...ink} d="M44 42 C 48 38, 54 38, 58 40" />
    </>
  ),
  // an inky circle that's trying to say something
  Arrival: (
    <>
      <circle {...ink} strokeWidth="7" cx="60" cy="68" r="34" strokeDasharray="60 8 30 6 90 10" />
      <circle fill="#111" cx="94" cy="60" r="5" />
      <circle fill="#111" cx="32" cy="88" r="4" />
      <circle fill="#111" cx="70" cy="34" r="3" />
      <text x="60" y="124" textAnchor="middle" fontFamily="Special Elite, monospace" fontSize="13" fill="#111">hello?</text>
    </>
  ),
}

export default function Doodle({ title }) {
  return (
    <svg viewBox="0 0 120 135" aria-hidden="true">
      {doodles[title]}
    </svg>
  )
}
