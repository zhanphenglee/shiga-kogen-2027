# Shiga Kogen 2027 🎿

Trip planning site for our ski trip to Shiga Kogen, Nagano — 2027 season. 12 of us.

**Live site:** https://zhanphenglee.github.io/shiga-kogen-2027/

## What's here

- `index.html` — the homepage. This is a self-contained page (own styles, own tab
  navigation for Stay / Transport / Itinerary) — it does **not** use the Jekyll layout in
  `_layouts/`, so edit it directly as plain HTML rather than through Liquid/front matter.
- `packing-list.md`, `budget.md`, `resources.md` — content pages, edit these directly as
  Markdown
- `participants.md` + `_data/participants.yml` — "who's coming" page, backed by data file
- `_layouts/`, `_includes/`, `assets/` — theme/styling for the Markdown pages only
  (the homepage carries its own styles inline)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — you don't need any coding experience, everything
can be edited from github.com in the browser.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site builds and deploys automatically to GitHub Pages on every push to `main` via the
workflow in `.github/workflows/pages.yml`.
