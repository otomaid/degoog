# Create a store repository

A **store repo** is a git repository that others can add in **Settings → Store**. Once added, users can browse and install your plugins, themes, and engines from the Store tab.

---

## Repo structure

Your repo must have this layout:

```
my-degoog-repo/
  package.json       # required — lists all items
  plugins/
    my-plugin/
      index.js       # same as data/plugins/ (see howto/plugins)
      template.html
      style.css
      ...
  themes/
    my-theme/
      theme.json     # same as data/themes/ (see howto/themes)
      style.css
      ...
  engines/
    my-engine/
      index.js       # same as data/engines/ (see howto/engines)
      ...
```

Plugin, theme, and engine folders use the **same format** as when installed in `data/plugins`, `data/themes`, and `data/engines`. No extra packaging.

---

## package.json (required)

At the **root** of the repo, add a `package.json` that lists every item:

```json
{
  "name": "my-degoog-repo",
  "description": "Short description of your collection",
  "author": "YourName",
  "plugins": [
    {
      "path": "plugins/my-plugin",
      "name": "My Plugin",
      "description": "What it does",
      "version": "1.0.0",
      "type": "command"
    }
  ],
  "themes": [
    {
      "path": "themes/my-theme",
      "name": "My Theme",
      "description": "Short description",
      "version": "1.0.0"
    }
  ],
  "engines": []
}
```

- **path** — folder path inside the repo (e.g. `plugins/my-plugin`).
- **name**, **description**, **version** — shown in the Store card.
- **type** (plugins only) — `"command"` or `"slot"`; optional.

Only items listed here appear in the Store. Paths must match real folders.

---

## Optional: author.json and screenshots

Inside any **plugin**, **theme**, or **engine** folder you can add:

- **author.json** — overrides the repo author for this item:

  ```json
  {
    "name": "Author Name",
    "url": "https://github.com/username",
    "avatar": "https://example.com/avatar.png"
  }
  ```

- **screenshots/** — image files (e.g. `1.png`, `preview.png`). The first one is the Store card thumbnail; all are shown in the lightbox when the user clicks the image.

---

## Publish and share

1. Push the repo to GitHub (or any git host).
2. Copy the **clone URL** (e.g. `https://github.com/you/my-degoog-repo.git`).
3. Tell users: **Settings → Store → Add**, then paste the URL.

Users add the repo once; they can then install, uninstall, and refresh from the Store. The [official extensions repo](https://github.com/fccview/fccview-degoog-extensions) is a full example.
