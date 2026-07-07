import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { Pool } = pg;
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const databaseUrl = process.env.DATABASE_URL;

let pool = null;
let dbReady = false;

if (databaseUrl) {
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: databaseUrl.includes('sslmode=require') ? undefined : { rejectUnauthorized: false }
  });
}

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

async function ensureDb() {
  if (!pool || dbReady) return Boolean(pool);

  await pool.query(`
    create table if not exists planner_state (
      id text primary key,
      data jsonb not null,
      updated_at timestamptz not null default now()
    )
  `);

  dbReady = true;
  return true;
}

app.get('/api/health', async (_req, res) => {
  try {
    const connected = await ensureDb();
    res.json({ ok: true, mode: connected ? 'neon' : 'localStorage' });
  } catch (error) {
    res.status(500).json({ ok: false, mode: 'localStorage', error: error.message });
  }
});

app.get('/api/state/:tripId', async (req, res) => {
  try {
    if (!(await ensureDb())) {
      return res.status(503).json({ error: 'DATABASE_URL is not configured.' });
    }

    const result = await pool.query(
      'select data, updated_at from planner_state where id = $1',
      [req.params.tripId]
    );

    if (!result.rowCount) return res.json({ data: null, updatedAt: null });
    res.json({ data: result.rows[0].data, updatedAt: result.rows[0].updated_at });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/state/:tripId', async (req, res) => {
  try {
    if (!(await ensureDb())) {
      return res.status(503).json({ error: 'DATABASE_URL is not configured.' });
    }

    const data = req.body?.data;
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Expected JSON body with a data object.' });
    }

    const result = await pool.query(
      `insert into planner_state (id, data, updated_at)
       values ($1, $2::jsonb, now())
       on conflict (id)
       do update set data = excluded.data, updated_at = now()
       returning updated_at`,
      [req.params.tripId, JSON.stringify(data)]
    );

    res.json({ ok: true, updatedAt: result.rows[0].updated_at });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Take-5 Cabin Lake Planner running at http://localhost:${port}`);
});
