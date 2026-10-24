import { useEffect, useState } from 'react'

// open-meteo is free and doesn't need a key
const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=53.41&longitude=-2.98&current=temperature_2m,weather_code&timezone=Europe%2FLondon'

function describe(code) {
  if (code === 0) return 'clear, which is rare'
  if (code <= 3) return 'grey'
  if (code <= 48) return 'foggy'
  if (code <= 57) return 'drizzling'
  if (code <= 67) return 'raining'
  if (code <= 77) return 'snowing'
  if (code <= 82) return 'pouring'
  return 'stormy'
}

export default function Weather() {
  const [now, setNow] = useState(null)

  useEffect(() => {
    let alive = true
    fetch(URL)
      .then((r) => r.json())
      .then((d) => {
        if (alive && d.current) {
          setNow({ temp: Math.round(d.current.temperature_2m), text: describe(d.current.weather_code) })
        }
      })
      .catch(() => {})
    return () => { alive = false }
  }, [])

  if (!now) return null
  return <p className="weather">It's {now.temp}°C and {now.text} here right now.</p>
}
