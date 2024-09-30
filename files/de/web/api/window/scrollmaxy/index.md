---
title: "Window: scrollMaxY Eigenschaft"
short-title: scrollMaxY
slug: Web/API/Window/scrollMaxY
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`Window.scrollMaxY`** gibt die maximale Anzahl an Pixeln zurück, um die das Dokument vertikal gescrollt werden kann.

## Wert

Eine Zahl.

## Beispiele

```js
// Scroll to the bottom of the page
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die gesamte Dokumenthöhe zu ermitteln, da diese nicht äquivalent zu [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight) + `window.scrollMaxY` ist. Denn [`window.innerHeight`](/de/docs/Web/API/Window/innerHeight) schließt die Breite eines sichtbaren horizontalen Scrollbalkens ein, wodurch das Ergebnis die gesamte Dokumenthöhe um die Breite eines sichtbaren horizontalen Scrollbalkens überschreiten würde. Verwenden Sie stattdessen [`document.body.scrollHeight`](/de/docs/Web/API/Element/scrollHeight). Siehe auch [`window.scrollMaxX`](/de/docs/Web/API/Window/scrollMaxX) und [`window.scrollTo`](/de/docs/Web/API/Window/scrollTo).

## Spezifikationen

Dies ist kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
