# Bhagavad Gita Learning

A responsive, bilingual Bhagavad Gita learning website with chapter summaries,
Sanskrit verses, transliteration, search, reflections, and locally saved progress.

## Run locally

From this folder, start a local web server:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

The verse reader loads `data/gita-verses.json`, so serve the folder over HTTP
rather than opening `index.html` directly as a file.

## Verse data

The Sanskrit verses and transliterations in `data/gita-verses.json` are from the
[BhagavadGita.io dataset](https://github.com/gita/gita/blob/main/data/verse.json),
released under the [Unlicense](https://github.com/gita/gita/blob/main/LICENSE).
