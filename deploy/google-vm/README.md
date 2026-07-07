# Google Compute Engine VM Deploy

Use this when you want the planner available all the time from a Google Cloud VM instead of Render.

## Recommended Shape

- VM: `e2-micro` is enough for this planner.
- OS: Ubuntu 24.04 LTS or Debian 12.
- Database: Neon Postgres stays external and stores the shared planner data.
- Web server: Caddy proxies public HTTP/HTTPS traffic to the Node app on `localhost:3000`.
- Process manager: systemd keeps the Node app running after reboot.

Google's Compute Engine free tier currently includes one `e2-micro` VM, with usage limits. You can also use any existing small VM you already pay for.

## Google Cloud Firewall

Allow inbound HTTP and HTTPS to the VM.

In the Google Cloud Console, enable:

- Allow HTTP traffic
- Allow HTTPS traffic

Or create firewall rules for TCP ports `80` and `443`.

## Server Setup

SSH into the VM, then run:

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Install Caddy using the official Caddy package instructions for Ubuntu/Debian:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy
```

Create an app user and install the repo:

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin take5
sudo git clone https://github.com/plummer92/Lake-Trip.git /opt/take5-planner
sudo chown -R take5:take5 /opt/take5-planner
cd /opt/take5-planner
sudo -u take5 npm ci --omit=dev
```

Create the environment file:

```bash
sudo nano /etc/take5-planner.env
```

Add your Neon connection string:

```text
DATABASE_URL=postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require
```

Lock it down:

```bash
sudo chown root:root /etc/take5-planner.env
sudo chmod 600 /etc/take5-planner.env
```

Install and start the service:

```bash
sudo cp /opt/take5-planner/deploy/google-vm/take5-planner.service /etc/systemd/system/take5-planner.service
sudo systemctl daemon-reload
sudo systemctl enable --now take5-planner
sudo systemctl status take5-planner
```

## Caddy Reverse Proxy

If you have a domain, point an `A` record to the VM external IP, then:

```bash
sudo cp /opt/take5-planner/deploy/google-vm/Caddyfile.example /etc/caddy/Caddyfile
sudo nano /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Replace `planner.example.com` with your real domain.

If you do not have a domain yet, use the `:80` block in `Caddyfile.example` and visit the VM external IP over HTTP.

## Updates

When you push changes to GitHub:

```bash
cd /opt/take5-planner
sudo git pull
sudo -u take5 npm ci --omit=dev
sudo systemctl restart take5-planner
```

## Health Check

```bash
curl http://127.0.0.1:3000/api/health
```

Expected with Neon configured:

```json
{"ok":true,"mode":"neon"}
```
