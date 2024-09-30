---
title: "Window: scrollMaxX-Eigenschaft"
short-title: scrollMaxX
slug: Web/API/Window/scrollMaxX
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`Window.scrollMaxX`** gibt die maximale Anzahl an Pixeln zurück, um die das Dokument horizontal gescrollt werden kann.

## Wert

Eine Zahl.

## Beispiele

```js
// Scroll to right edge of the page
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die Gesamtbreite des Dokuments zu ermitteln, da sie nicht gleichbedeutend mit [window.innerWidth](/de/docs/Web/API/Window/innerWidth) + window\.scrollMaxX ist, weil [`window.innerWidth`](/de/docs/Web/API/Window/innerWidth) die Breite einer sichtbaren vertikalen Scrollleiste einschließt. Das Ergebnis würde daher die Gesamtbreite des Dokuments um die Breite einer sichtbaren vertikalen Scrollleiste überschreiten. Verwenden Sie stattdessen [`document.body.scrollWidth`](/de/docs/Web/API/Element/scrollWidth). Siehe auch [`window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY).

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
