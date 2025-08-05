---
title: "FontFace: lineGapOverride-Eigenschaft"
short-title: lineGapOverride
slug: Web/API/FontFace/lineGapOverride
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`lineGapOverride`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces gibt den Wert des {{cssxref("@font-face/line-gap-override")}}-Descriptors zurück und setzt ihn.
Die möglichen Werte sind `normal`, was bedeutet, dass das metrische Maß aus der Schriftdatei verwendet werden soll, oder ein Prozentsatz.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
  { lineGapOverride: "90%" },
);
console.log(fontFace.lineGapOverride); // 90%
fontFace.lineGapOverride = "normal";
console.log(fontFace.lineGapOverride); // 'normal'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
