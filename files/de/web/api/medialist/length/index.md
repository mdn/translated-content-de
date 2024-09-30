---
title: "MediaList: length Eigenschaft"
short-title: length
slug: Web/API/MediaList/length
l10n:
  sourceCommit: 48df6f9341153cd1f3021f5042f337ba0346f910
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`MediaList`](/de/docs/Web/API/MediaList)-Interfaces gibt die Anzahl der Medienabfragen in der Liste zurück.

## Wert

Eine positive ganze Zahl.

## Beispiele

Das folgende Beispiel gibt die Anzahl der Medienabfragen, die in der `MediaList` gespeichert sind, die dem ersten auf das aktuelle Dokument angewendeten Stylesheet zugeordnet ist, in der Konsole aus.

```js
const stylesheets = document.styleSheets;
const stylesheet = stylesheets[0];
console.log(stylesheet.media.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
