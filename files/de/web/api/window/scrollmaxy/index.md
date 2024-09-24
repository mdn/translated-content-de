---
title: "Fenster: scrollMaxY-Eigenschaft"
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
// Scrollen Sie zum Ende der Seite
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Hinweise

Verwenden Sie diese Eigenschaft nicht, um die gesamte Dokumentenhöhe zu ermitteln. Diese ist nicht gleichbedeutend mit {{domxref("window.innerHeight")}} + window\.scrollMaxY, da {{domxref("window.innerHeight")}} die Breite einer sichtbaren horizontalen Bildlaufleiste einschließt. Das Ergebnis würde daher die gesamte Dokumentenhöhe um die Breite einer sichtbaren horizontalen Bildlaufleiste überschreiten. Verwenden Sie stattdessen {{domxref("element.scrollHeight","document.body.scrollHeight")}}. Siehe auch {{domxref("window.scrollMaxX")}} und {{domxref("window.scrollTo")}}.

## Spezifikationen

Dies ist kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
