---
title: "MediaList: Länge-Eigenschaft"
short-title: Länge
slug: Web/API/MediaList/length
l10n:
  sourceCommit: 48df6f9341153cd1f3021f5042f337ba0346f910
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`length`**-Eigenschaft der {{DOMxRef("MediaList")}}-Schnittstelle gibt die Anzahl der Medienelemente in der Liste zurück.

## Wert

Eine positive ganze Zahl.

## Beispiele

Das folgende Beispiel protokolliert die Anzahl der Medienelemente in der Konsole, die in der `MediaList` gespeichert sind, die mit dem ersten auf das aktuelle Dokument angewendeten Stylesheet verknüpft ist.

```js
const stylesheets = document.styleSheets;
const stylesheet = stylesheets[0];
console.log(stylesheet.media.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
