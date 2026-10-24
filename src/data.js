// everything you'd want to edit lives in this file

export const me = {
  name: 'Archana',
  role: 'data analyst & software developer',
  location: 'Liverpool, UK',
  intro:
    "I'm an aspiring data analyst and developer in Liverpool. I like taking messy data and turning it into something people can actually read. Right now I'm building interactive exhibits for the British Music Experience!",
  tools:
    'I mostly work with Python, SQL, pandas and Power BI on the data side, and React and Flask when something needs building :D',
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
    side: 'A',
    title: 'Mapping the astronomy corner of Wikipedia',
    tag: 'MSc dissertation',
    length: '1,520 nodes',
    art: 'network',
    question:
      'Which astronomy articles hold Wikipedia together, and do the communities a graph algorithm finds match how astronomers actually group things?',
    did:
      'Pulled a directed hyperlink graph through the MediaWiki API, ran five centrality measures, compared three community detection methods, trained node2vec embeddings and tested link prediction. All of it sits behind a Flask and vis.js dashboard with an LLM that explains what you are looking at.',
    stats: [
      { n: '10,103', l: 'edges' },
      { n: '0.675', l: 'NMI vs taxonomy' },
      { n: '0.95', l: 'ROC-AUC, link prediction' },
    ],
    found:
      'Louvain beat Girvan-Newman and greedy modularity by a clear margin, and plain old classical link prediction beat node2vec (0.95 vs 0.92). Fancier was not better here.',
    stack: ['Python', 'NetworkX', 'node2vec', 'Flask', 'vis.js'],
    links: [{ label: 'code', href: 'https://github.com/archdoesthings' }],
  },
  {
    side: 'A',
    title: 'Why does nobody tour Liverpool?',
    tag: 'ongoing',
    length: 'UK & IE',
    art: 'bars',
    question:
      'Artists keep skipping some cities and not others. Is it venue size, population, album timing, or just habit?',
    did:
      "Built an automated daily pipeline that pulls every upcoming UK and Irish music event from the Ticketmaster and Skiddle APIs into a SQLite database. Cleaned messy location data by mapping venues to cities with coordinates and postcodes, which caught venues listed with another city's coordinates, and matched artists to album release dates through MusicBrainz to see how tours line up with releases.",
    stats: [
      { n: '17,800', l: 'events' },
      { n: '2,700', l: 'venues' },
      { n: '4,000', l: 'artists' },
    ],
    found: 'The pipeline runs every day. The actual answer to the question is still cooking.',
    stack: ['Python', 'SQLite', 'Ticketmaster API', 'Skiddle API', 'MusicBrainz'],
    links: [],
  },
  {
    side: 'A',
    title: 'My own Spotify history, picked apart',
    tag: 'in progress',
    length: 'years of plays',
    art: 'waveform',
    question: 'What do I actually listen to, when, and how has it changed over the years?',
    did: 'Working through my Spotify data export to look at listening habits over time.',
    stats: [],
    found: 'Still cooking. Write-up coming soon.',
    stack: ['Python', 'pandas'],
    links: [],
  },
  {
    side: 'B',
    title: 'Memoria',
    tag: 'British Music Experience',
    length: 'internship',
    art: 'graph',
    question:
      'How do you let museum visitors explore music with their hands, no mouse or touchscreen?',
    did:
      'Built three React screens for the museum: genres as a DJ deck, instruments as 3D models on a stage, and zones as cards that flip on their own to show each part of the museum. Also built the Leap Motion gesture controls visitors use to get around them: grab to select, grab and move to pan, swipe left or right to go back, and hover.',
    stats: [{ n: '4', l: 'gesture types' }],
    found: '',
    stack: ['React', 'React Three Fiber', 'Three.js', 'Leap Motion'],
    links: [],
  },
  {
    side: 'B',
    title: 'lazy-hand',
    tag: 'side project',
    length: 'webcam',
    art: 'hand',
    question: 'Could I control my laptop without touching it?',
    did: 'Hand gesture control using MediaPipe and OpenCV, mapped to keyboard and mouse actions.',
    stats: [],
    found: '',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
    links: [{ label: 'code', href: 'https://github.com/archdoesthings/lazy-hand' }],
  },
]

// fill in your real dates
export const experience = [
  {
    when: '2026',
    what: 'Software Developer Intern',
    where: 'British Music Experience, via University of Liverpool',
    note: 'React screens for a live museum installation (a DJ deck, a 3D instrument stage and flipping zone cards), plus Leap Motion gesture controls. Going live in November.',
  },
  {
    when: '2025',
    what: 'Educational Research Analyst Intern',
    where: 'Brighter Admission Consultant, Dubai',
    note: "Collected data to keep the company's website up to date.",
  },
  {
    when: '2023',
    what: 'IT Intern',
    where: 'Sobha Constructions, Dubai',
    note: 'HRMS data migration and Power Automate flows that cut processing time by about 40%.',
  },
]

export const education = [
  {
    when: '2025-2026',
    what: 'MSc Advanced Data Science & AI',
    where: 'University of Liverpool, Liverpool',
    note: 'Dissertation on network analysis of Wikipedia. Also ML coursework on bandits and DQN.',
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
