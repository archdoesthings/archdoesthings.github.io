import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// lets the pile editor (/?edit) save positions. dev server only, never in the built site
function deskLayoutSaver() {
  const file = path.resolve('src/deskLayout.json')
  return {
    name: 'desk-layout-saver',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__desk-layout', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          return res.end()
        }
        let body = ''
        req.on('data', (c) => (body += c))
        req.on('end', () => {
          try {
            const data = JSON.parse(body)
            const ok = Object.values(data).every((v) => ['l', 't', 'w', 'r', 'z'].every((k) => typeof v[k] === 'number'))
            if (!ok) throw new Error('unexpected layout shape')
            // one line per item so the file stays easy to read
            const lines = Object.entries(data).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
            fs.writeFileSync(file, '{\n' + lines.join(',\n') + '\n}\n')
            res.end('ok')
          } catch (e) {
            res.statusCode = 400
            res.end(String(e.message))
          }
        })
      })
    },
  }
}

// user site (archdoesthings.github.io) is served from the root, so base stays '/'
export default defineConfig({
  plugins: [react(), deskLayoutSaver()],
  base: '/',
  server: { port: 3456 },
  preview: { port: 3456 },
})
