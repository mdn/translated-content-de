---
title: "Window: scrollByPages()-Methode"
short-title: scrollByPages()
slug: Web/API/Window/scrollByPages
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.scrollByPages()`**-Methode scrollt das aktuelle Dokument um die angegebene Anzahl von Seiten.

## Syntax

```js-nolint
scrollByPages(pages)
```

### Parameter

- `pages`
  - : Die Anzahl der zu scrollenden Seiten. Es kann eine positive oder negative ganze Zahl sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// scroll down the document by 1 page
window.scrollByPages(1);

// scroll up the document by 1 page
window.scrollByPages(-1);
```

## Spezifikationen

DOM Level 0. Nicht Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.scroll()`](/de/docs/Web/API/Window/scroll)
- [`window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
- [`window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines)
- [`window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)
