---
title: "MediaList: length-Eigenschaft"
short-title: length
slug: Web/API/MediaList/length
l10n:
  sourceCommit: 48df6f9341153cd1f3021f5042f337ba0346f910
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`length`**-Eigenschaft der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle gibt die Anzahl der Medienabfragen in der Liste zurück.

## Wert

Eine positive ganze Zahl.

## Beispiele

Das folgende Beispiel protokolliert die Anzahl der Medienabfragen in der `MediaList`, die dem ersten Stylesheet zugeordnet ist, das auf das aktuelle Dokument angewendet wird, in der Konsole.

```js
const stylesheets = document.styleSheets;
const stylesheet = stylesheets[0];
console.log(stylesheet.media.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
