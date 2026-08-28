# Shiga Kogen 2027 🎿

Trip planning site for our ski trip to Shiga Kogen, Nagano — 2027 season. 12 of us.

**Live site:** https://zhanphenglee.github.io/shiga-kogen-2027/

## What's here

- `index.html` — homepage
- `itinerary.md`, `accommodation.md`, `packing-list.md`, `budget.md`, `resources.md` —
  content pages, edit these directly
- `participants.md` + `_data/participants.yml` — "who's coming" page, backed by data file
- `_layouts/`, `_includes/`, `assets/` — site theme/styling, don't need to touch these
  unless you're changing the design

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
