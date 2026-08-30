# Shiga Kogen 2027 🎿

Trip planning site for our ski trip to Shiga Kogen, Nagano — 2027 season. 12 of us.

**Live site:** https://zhanphenglee.github.io/shiga-kogen-2027/

## What's here

Five real pages, sharing common styles/scripts/data — no build step, no framework, still
just static files:

- `index.html`, `stay.html`, `transport.html`, `itinerary.html`, `food.html` — one page
  per section. Each has its own URL, so refreshing or sharing a link keeps you on that page.
- `css/style.css` — all styling, shared by every page.
- `js/map.js` — the Leaflet map logic shared by the Overview and Stay maps.
- `data/zones.json`, `data/hotel.json`, `data/road-292.json` — the actual content the maps
  render (ski area locations, hotel details, the Route 292 road geometry). Edit these to
  change what the maps show, without touching any code.
- `images/` — trail maps and photos.

Deploys automatically to GitHub Pages on every push to `main`, via
`.github/workflows/pages.yml`.

## Local preview

The maps load their data via `fetch()`, which browsers block for files opened directly
(`file://`) for security reasons. So previewing needs a tiny local server instead of just
double-clicking `index.html`:

```bash
cd shiga-kogen-2027
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Any other static server works too (`npx serve`, VS
Code's Live Server extension, etc).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — you don't need any coding experience, everything
can be edited from github.com in the browser.
