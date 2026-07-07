# Take-5 Cabin Lake Planner

A responsive family lake-trip command center for Norris Lake, Flat Hollow Marina, and Take-5 Cabin.

## Run Locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

Without `DATABASE_URL`, the app still works using browser local storage.

## Use Neon For Shared Family Access

1. Create a Neon project and copy the pooled connection string.
2. Copy `.env.example` to `.env`.
3. Paste the connection string as `DATABASE_URL`.
4. Restart the app.

The app creates its own `planner_state` table on startup. Keep `DATABASE_URL` on the server only. Do not paste it into browser JavaScript.

## Deploy For Anytime Family Access

For 6 people to use the planner anytime, it needs two hosted pieces:

1. A Neon Postgres database for the shared trip state.
2. A public Node web service for the app itself.

Your laptop should only be used for development. Once deployed, everyone uses the hosted URL and your laptop can be closed.

This app can be deployed anywhere that runs Node, such as Render, Railway, Fly.io, or a VPS. Render is the simplest path for this project because `render.yaml` is already included.

### Render Setup

1. Push this folder to GitHub.
2. In Render, create a new Blueprint or Web Service from the GitHub repo.
3. Add this environment variable in Render:

```text
DATABASE_URL=postgresql://...
```

Use your Neon pooled connection string with `sslmode=require`.

4. Deploy the service.
5. Share the Render URL with the 6 family members.

Use an always-on Render plan if you want the planner to be available instantly every time. Free services can sleep when inactive.

Set the environment variable:

```text
DATABASE_URL=postgresql://...
```

Then use:

```text
npm install
npm start
```

Everyone can use the same hosted URL and share one synced planner.

## Notes For Six-Person Family Use

- With Neon configured, everyone sees and edits the same shared trip state.
- Without Neon, each browser has its own local copy.
- Export and import are included as a backup way to move the plan between devices.
- There are no accounts yet, so share the hosted URL only with the people who should edit the planner.
