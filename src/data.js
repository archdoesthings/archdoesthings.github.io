// everything you'd want to edit lives in this file

export const me = {
  name: 'Archana',
  role: 'data analyst & software developer',
  location: 'Liverpool, UK',
  intro:
    "I'm a data science grad in Liverpool, looking for my first data analyst role. I like taking messy data and turning it into something people can actually read. Right now I'm building interactive exhibits for the British Music Experience!",
  tools:
    'I mostly work with Python, SQL, pandas and Excel on the data side, and React and Flask when something needs building. Learning Power BI right now :D',
  email: 'archanaasrinivasaa@gmail.com',
  github: 'https://github.com/archdoesthings',
  linkedin: 'https://www.linkedin.com/in/archanaasrinivasa/', // swap
  cv: {
    data: '/cv/Archana-Srinivasa-Murthy-CV-Data-Analyst.pdf',
    dev: '/cv/Archana-Srinivasa-Murthy-CV-Software-Developer.pdf',
  },
}


// side A = data, side B = software
// art: network | bars | waveform | graph | hand | path
export const tracks = [
  {
    side: 'B',
    title: 'Memoria',
    tag: 'British Music Experience',
    length: 'internship',
    art: 'graph',
    question:
      "What if a museum let you play with music using just your hands?",
    did:
      "I built three screens for the British Music Experience: a DJ deck for genres, a stage of 3D instruments, and zone cards that flip on their own. Visitors get around with hand gestures picked up by a Leap Motion sensor. Opening in November.",
    stats: [{ n: '4', l: 'gesture types' }],
    found: '',
    stack: ['React', 'React Three Fiber', 'Three.js', 'Leap Motion'],
    links: [],
  },
  {
    side: 'A',
    id: 'dissertation',
    title: 'Mapping the astronomy corner of Wikipedia',
    tag: 'MSc dissertation',
    length: '1,520 nodes',
    art: 'network',
    question:
      "Which Wikipedia pages hold the universe together?",
    did:
      "I mapped how 1,520 astronomy pages link to each other, then asked the graph which ones really matter and whether it sorts topics the way astronomers would. It all lives in a dashboard with an LLM that explains what you're looking at.",
    stats: [
      { n: '10,103', l: 'edges' },
      { n: '0.675', l: 'NMI vs taxonomy' },
      { n: '0.95', l: 'ROC-AUC, link prediction' },
    ],
    found:
      "The fancy method lost. Plain old link prediction beat node2vec, 0.95 to 0.92.",
    stack: ['Python', 'NetworkX', 'node2vec', 'Flask', 'vis.js'],
    links: [{ label: 'code', href: 'https://github.com/archdoesthings/COMP702-Astronomy-SNA' }],
  },
  {
    side: 'B',
    title: 'lazy-hand',
    tag: 'side project',
    length: 'webcam',
    art: 'hand',
    question: "Could I use my laptop without touching it?",
    did: "Point to move the cursor, pinch to click, two fingers to scroll. All through the webcam, with MediaPipe tracking 21 points on your hand.",
    stats: [],
    found: '',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
    links: [{ label: 'code', href: 'https://github.com/archdoesthings/lazy-hand' }],
  },
  {
    side: 'A',
    title: 'Why does nobody tour Liverpool?',
    tag: 'ongoing',
    length: 'UK & IE',
    art: 'bars',
    question:
      "Is it the venues, the crowds, or just habit?",
    did:
      "Every day, a pipeline I built collects every upcoming gig in the UK and Ireland. Turns out venue data is a mess. Some venues swear they're in a completely different city, so that had to get sorted before anything else.",
    stats: [
      { n: '17,800', l: 'events' },
      { n: '2,700', l: 'venues' },
      { n: '4,000', l: 'artists' },
    ],
    found: "The data's in. The answer's still cooking.",
    stack: ['Python', 'SQLite', 'Ticketmaster API', 'Skiddle API', 'MusicBrainz'],
    links: [],
  },
  {
    side: 'A',
    title: 'Me vs. the Charts',
    tag: 'in progress',
    length: 'years of plays',
    art: 'waveform',
    question:
      "Do I find music early, or am I just catching up with everyone else?",
    asks: [
      "Do I get there before the charts do?",
      "Do Liverpool winters make my music sadder than Dubai ones did?",
      "How mainstream am I, really?",
      "Do songs stick around longer for me than they do in the charts?",
    ],
    did:
      "Every play since I opened my Spotify account, lined up against the UK charts. The chart data has no track IDs, so just matching the songs up is half the battle.",
    stats: [],
    found: "Still cooking. Results soon.",
    stack: ['Python', 'pandas', 'DuckDB', 'rapidfuzz', 'statsmodels', 'matplotlib', 'Tableau Public'],
    links: [],
  },
]

// fill in your real dates
export const experience = [
  {
    when: '2026',
    what: 'Software Developer Intern',
    where: 'British Music Experience, via University of Liverpool',
    note: "Building screens for a live museum exhibit that visitors control with hand gestures. Opening in November.",
  },
  {
    when: '2025',
    what: 'Educational Research Analyst Intern',
    where: 'Brighter Admission Consultant, Dubai',
    note: "Gathered university and course data and kept the company's website up to date.",
  },
  {
    when: '2023',
    what: 'IT Intern',
    where: 'Sobha Constructions, Dubai',
    note: "Cleaned up HR records for a system migration and automated the boring bits, cutting processing time by about 40%.",
  },
]

export const education = [
  {
    when: '2025-2026',
    what: 'MSc Advanced Data Science & AI',
    where: 'University of Liverpool, Liverpool',
    note: "Dissertation on how Wikipedia's astronomy pages fit together.",
  },
  {
    when: '2021-2024',
    what: 'BSc Information Systems & Management',
    where: 'Manipal Academy of Higher Education, Dubai',
    note: 'Graduated with a CGPA of 9.19/10.',
  },
]

export const about = [
  "I came to Liverpool for a master’s in data science and stayed for the music. Now I get to work on both at the British Music Experience!",
  "Most of my favourite projects end up somewhere between data and music. I care about the boring parts too: cleaning the data, checking the numbers, and writing it up so someone else can follow it.",
]

// off the clock

// put your pictures in public/photos and point src at them, e.g. '/photos/01.jpg'
// leave src empty and it shows a placeholder frame
export const photos = [
  { src: '/photos/skyline-tower.webp', caption: 'radio city tower', where: 'Liverpool' },
  { src: '/photos/palms.webp', caption: 'palm trees all the way down to the sea', where: '' },
  { src: '/photos/car-boot.webp', caption: 'barbecue with a couple of friends', where: 'Dubai' },
  { src: '/photos/beatles.webp', caption: 'the fab four at the pier head', where: 'Liverpool' },
  { src: '/photos/race-cars.webp', caption: 'Benz range', where: 'Mercedes-Benz Museum' },
  { src: '/photos/skyline-hill.webp', caption: 'the view from everton park', where: 'Liverpool' },
  { src: '/photos/victoria-building.webp', caption: 'the victoria building at blue hour', where: 'University of Liverpool' },
  { src: '/photos/moon.webp', caption: 'tiny moon, blue hour', where: 'London' },
  { src: '/photos/hogwarts-express.webp', caption: 'platform 9 3/4', where: 'Enroute Hogwarts' },
]

// link: paste a Spotify track link (Share > Copy song link) and it plays on the page
// color is the cd cover colour
export const songs = [
  { title: 'Going Shopping', artist: 'The Strokes', link: 'https://open.spotify.com/track/4dUOhTTMy4ITIbNQKPKYFP?si=eb9da6776b7a43b0', color: '#e22326' },
  { title: "She's Electric", artist: 'Oasis', link: 'https://open.spotify.com/track/4yCihiznWkDsbuIqf6mSiG?si=ae60d463e9fd4eda', color: '#111111' },
  { title: 'Norweigan Wood', artist: 'The Beatles', link: 'https://open.spotify.com/track/1H7gMYGykdtwZOV6s1N0by?si=c2001a3d82ae49fd', color: '#ffde00' },
  { title: 'Nine in the Afternoon', artist: 'Panic! At the Disco', link: 'https://open.spotify.com/track/3oap5wNMWwX1dT3AVKwLzH?si=1d34c85cc59e4f5d', color: '#5b5b58' },
  { title: 'Helena', artist: 'My Chemical Romance', link: 'https://open.spotify.com/track/5dTHtzHFPyi8TlTtzoz1J9?si=2b397596989e4144', color: '#2a2a2a' },
  { title: 'What Is Life', artist: 'George Harrison', link: 'https://open.spotify.com/track/39yEXQkVAQeZksS82CnFGK?si=3b108c054ef142ed', color: '#8d8d8a' },
]

export const movies = [
  { title: 'Dead Poets Society', year: '1989', seen: 4, note: 'taught me to seize the day; carpe diem' },
  { title: 'Interstellar', year: '2014', seen: 4, note: 'need i say anything more?' },
  { title: 'Project Hail Mary', year: '2026', seen: 3, note: 'one of the best movies released in recent years, amaze' },
  { title: 'The Truman Show', year: '1998', seen: 2, note: 'fully was convinced I was Truman when I watched it for the first time' },
  { title: 'Superbad', year: '2007', seen: 2, note: 'I am McLovin' },
  { title: 'The Greatest Showman', year: '2017', seen: 7, note: 'Top 3 musicals, hands down' },
  { title: 'Knives Out', year: '2019', seen: 5, note: 'Notice something new with every rewatch!' },
  { title: 'Arrival', year: '2016', seen: 3, note: 'The concept of communication was something very new' }
]
