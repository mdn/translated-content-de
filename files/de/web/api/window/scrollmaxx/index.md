---
title: "Window: scrollMaxX-Eigenschaft"
short-title: scrollMaxX
slug: Web/API/Window/scrollMaxX
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

Die schreibgeschützte **`Window.scrollMaxX`**-Eigenschaft gibt die maximale Anzahl von Pixeln zurück, um die das Dokument horizontal gescrollt werden kann.

## Wert

Eine Zahl.

## Beispiele

```js
// Scroll to right edge of the page
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die gesamte Dokumentbreite zu ermitteln. Diese ist nicht äquivalent zu [window.innerWidth](/de/docs/Web/API/Window/innerWidth) + window\.scrollMaxX, da [`window.innerWidth`](/de/docs/Web/API/Window/innerWidth) auch die Breite einer sichtbaren vertikalen Scrollleiste einschließt. Daher würde das Ergebnis die gesamte Dokumentbreite um die Breite einer sichtbaren vertikalen Scrollleiste überschreiten. Verwenden Sie stattdessen [`document.body.scrollWidth`](/de/docs/Web/API/Element/scrollWidth). Siehe auch [`window.scrollMaxY`](/de/docs/Web/API/Window/scrollMaxY).

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
