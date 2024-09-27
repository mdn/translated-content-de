---
title: "Window: scrollMaxY-Eigenschaft"
short-title: scrollMaxY
slug: Web/API/Window/scrollMaxY
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

Die schreibgeschützte **`Window.scrollMaxY`**-Eigenschaft gibt die maximale Anzahl von Pixeln zurück, um die das Dokument vertikal gescrollt werden kann.

## Wert

Eine Zahl.

## Beispiele

```js
// Scroll to the bottom of the page
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die gesamte Dokumenthöhe zu ermitteln. Diese entspricht nicht der Summe aus [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight) + window\.scrollMaxY, da [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight) die Breite einer sichtbaren horizontalen Scrollleiste einschließt. Das Ergebnis würde daher die gesamte Dokumenthöhe um die Breite einer sichtbaren horizontalen Scrollleiste überschreiten. Verwenden Sie stattdessen [`document.body.scrollHeight`](/de/docs/Web/API/Element/scrollHeight). Siehe auch [`window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) und [`window.scrollTo`](/de/docs/Web/API/Window/scrollTo).

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
