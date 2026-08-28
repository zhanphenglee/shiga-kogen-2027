# Contributing to the trip site

No coding experience needed. The whole site is one HTML file, and you can edit it
straight from github.com in your browser.

## Quick edit (no git, no terminal)

1. Open [`index.html`](https://github.com/zhanphenglee/shiga-kogen-2027/blob/main/index.html)
   in the repo and click the pencil icon (✏️) in the top right of the file view.
2. Find the section you want to change — search the page (Cmd/Ctrl+F in the editor) for
   text you see on the live site, e.g. "Shiga Kogen Prince" or "Snow Monkey Park".
3. Make your edit. It's plain HTML — text between tags like `<li>...</li>` or `<p>...</p>`
   is safe to change; leave the tags themselves and the `class="..."` attributes alone.
4. Scroll down, add a short message describing your change, and choose
   **"Create a new branch and start a pull request."**
5. Click **"Propose changes"**, then **"Create pull request"** on the next screen.
6. Zhan (or anyone with write access) reviews and merges it — the live site updates
   automatically within a minute or two.

## Adding a new card (hotel, route, ski zone, restaurant)

Each hotel/route/zone on the site is a `<article class="card">...</article>` block.
Copy an existing one that's similar to what you're adding, paste it as a new sibling
inside the same `<div class="row">`, and edit the text inside.

## Adding a new pin to the Overview map

Pins are `<a class="pin" href="#zone-something" style="left:X%;top:Y%;">N</a>` elements,
positioned by percentage over the map image. Add a new `<a class="pin">` at your chosen
position, and a matching `<article class="card" id="zone-something">` in the cards below
it — the `href` and `id` need to match.

## If you're comfortable with git

```bash
git clone https://github.com/zhanphenglee/shiga-kogen-2027.git
cd shiga-kogen-2027
git checkout -b your-name/some-change
# edit index.html
git add .
git commit -m "Update packing notes"
git push -u origin your-name/some-change
```

Then open a pull request on GitHub. If you have write access you can push straight to
`main`, but PRs are nice so changes are visible before they go live.

## Previewing locally

No build step — just open `index.html` directly in a browser (double-click it, or drag
it into a browser window) to see your changes before pushing.

## Everyone has write access

All 12 of us are added as collaborators on the repo, so you can push branches and open
PRs directly — no need to fork.
