# Contributing to the trip site

No coding experience needed for most edits. The site is five HTML pages
(`index.html`, `stay.html`, `transport.html`, `itinerary.html`, `food.html`) sharing one
stylesheet, one script, and a few data files — you can edit any of it straight from
github.com in your browser.

## Quick edit (no git, no terminal)

1. Open the [repo](https://github.com/zhanphenglee/shiga-kogen-2027) and find the page you
   want to change — `stay.html` for the hotel, `transport.html` for getting there,
   `itinerary.html` for the day plan, `food.html` for restaurants, `index.html` for the
   Overview map page.
2. Click into the file, then the pencil icon (✏️) in the top right to edit.
3. Find your text (Cmd/Ctrl+F in the editor) and make your change. It's plain HTML — text
   between tags like `<li>...</li>` or `<p>...</p>` is safe to change; leave the tags
   themselves and `class="..."` attributes alone.
4. Scroll down, add a short message describing your change, and choose
   **"Create a new branch and start a pull request."**
5. Click **"Propose changes"**, then **"Create pull request"** on the next screen.
6. Zhan (or anyone with write access) reviews and merges it — the live site updates
   automatically within a minute or two.

## Adding a new card (hotel, route, ski zone, restaurant)

Each hotel/route/zone/run on the site is an `<article class="card">...</article>` block.
Copy an existing one that's similar to what you're adding, paste it as a new sibling
inside the same `<div class="row">`, and edit the text inside.

## Changing what the maps show

The Overview and Stay maps don't have their data written into the HTML — they read it from
JSON files in `data/`:

- `data/zones.json` — the 9 ski areas (name, coordinates, blurb) plotted on both maps.
- `data/hotel.json` — the hotel's name, coordinates, and dates, used on the Stay map.
- `data/road-292.json` — the road route drawn on the Overview map.

To move a pin or fix a name, edit the relevant JSON file directly — no HTML or JS touch
needed. To add a 10th ski area, add an entry to `zones.json`; it'll appear on both maps
automatically, and on the Stay map it gets ranked by distance from the hotel automatically
too.

If you want a new "Full details" card to match a new zone (Overview page only), add a
`<article class="card" id="zone-something">` to `index.html` — the `id` needs to match the
`id` you used in `zones.json`.

## If you're comfortable with git

```bash
git clone https://github.com/zhanphenglee/shiga-kogen-2027.git
cd shiga-kogen-2027
git checkout -b your-name/some-change
# edit files
git add .
git commit -m "Update packing notes"
git push -u origin your-name/some-change
```

Then open a pull request on GitHub. If you have write access you can push straight to
`main`, but PRs are nice so changes are visible before they go live.

## Previewing locally

The maps fetch their data from the `data/` JSON files, which browsers block when you open
a file directly (`file://`) rather than through a server. So instead of double-clicking
`index.html`, run a tiny local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in your browser. (Pages without maps —
`transport.html`, `itinerary.html`, `food.html` — will actually open fine directly too,
it's just the two map pages that need the server.)

## Everyone has write access

All 12 of us are added as collaborators on the repo, so you can push branches and open
PRs directly — no need to fork.
