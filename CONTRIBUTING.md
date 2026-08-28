# Contributing to the trip site

No coding experience needed. Everything on the site is a plain text (Markdown) file, and
you can edit it straight from github.com in your browser.

## Quick edit (no git, no terminal)

1. Open the [repo](https://github.com/zhanphenglee/shiga-kogen-2027) and click into the
   file you want to change (e.g. `packing-list.md`).
2. Click the pencil icon (✏️) in the top right of the file view — this opens the editor.
3. Make your edit. It's Markdown: `## heading`, `- bullet`, `**bold**`, `[link](url)`,
   `| table | cells |`.
4. Scroll down, add a short message describing your change, and choose
   **"Create a new branch and start a pull request."**
5. Click **"Propose changes"**, then **"Create pull request"** on the next screen.
6. Zhan (or anyone with write access) reviews and merges it — the live site updates
   automatically within a minute or two.

## Adding yourself to "Who's Coming"

Edit [`_data/participants.yml`](https://github.com/zhanphenglee/shiga-kogen-2027/blob/main/_data/participants.yml)
and add a block like:

```yaml
- name: "Your Name"
  level: "intermediate"
  role: ""
  notes: "vegetarian, arriving a day early"
```

## If you're comfortable with git

```bash
git clone https://github.com/zhanphenglee/shiga-kogen-2027.git
cd shiga-kogen-2027
git checkout -b your-name/some-change
# edit files
git add .
git commit -m "Update packing list"
git push -u origin your-name/some-change
```

Then open a pull request on GitHub. If you have write access you can push straight to
`main`, but PRs are nice so changes are visible before they go live.

## Running the site locally (optional)

Only needed if you want to preview changes before pushing. Requires Ruby.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/shiga-kogen-2027/`.

## Everyone has write access

All 12 of us are added as collaborators on the repo, so you can push branches and open
PRs directly — no need to fork.
