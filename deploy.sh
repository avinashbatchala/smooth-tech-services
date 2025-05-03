#!/usr/bin/env bash
set -e

APP_DIR="/home/ubuntu/apps/smooth-tech-services"
cd "$APP_DIR"

echo "🛰 Pulling latest code…"
git pull origin main

echo "📦 Installing dependencies…"
npm install

echo "🏗 Building…"
npm run build

echo "🔄 Reloading Nginx…"
sudo systemctl reload nginx

echo "✅ Deployed at $(date '+%Y-%m-%d %H:%M:%S')"

