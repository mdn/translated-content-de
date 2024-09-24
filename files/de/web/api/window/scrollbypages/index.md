---
title: "Fenster: scrollByPages()-Methode"
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
  - : Die Anzahl der Seiten, um die gescrollt werden soll. Es kann sich um eine positive oder negative Ganzzahl handeln.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Scrollen Sie das Dokument um 1 Seite nach unten
window.scrollByPages(1);

// Scrollen Sie das Dokument um 1 Seite nach oben
window.scrollByPages(-1);
```

## Spezifikationen

DOM Level 0. Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByLines()")}}
- {{domxref("window.scrollTo()")}}
