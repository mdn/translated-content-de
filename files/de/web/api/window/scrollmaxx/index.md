---
title: "Window: scrollMaxX-Eigenschaft"
short-title: scrollMaxX
slug: Web/API/Window/scrollMaxX
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.scrollMaxX`**-Eigenschaft, die nur gelesen werden kann, gibt die maximale Anzahl von Pixeln zurück, um die das Dokument horizontal gescrollt werden kann.

## Wert

Eine Zahl.

## Beispiele

```js
// Zum rechten Rand der Seite scrollen
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die gesamte Breite des Dokuments zu ermitteln, da diese nicht gleich [window.innerWidth](/de/docs/Web/API/Window/innerWidth) + window\.scrollMaxX ist, weil {{domxref("window.innerWidth")}} die Breite einer sichtbaren vertikalen Scrollleiste einschließt. Das Ergebnis würde daher die gesamte Breite des Dokuments um die Breite einer sichtbaren vertikalen Scrollleiste überschreiten. Verwenden Sie stattdessen {{domxref("element.scrollWidth","document.body.scrollWidth")}}. Siehe auch {{domxref("window.scrollMaxY")}}.

## Spezifikationen

Diese Eigenschaft ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
