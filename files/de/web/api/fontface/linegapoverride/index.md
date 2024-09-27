---
title: "FontFace: lineGapOverride-Eigenschaft"
short-title: lineGapOverride
slug: Web/API/FontFace/lineGapOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`lineGapOverride`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces gibt den Wert des {{cssxref("@font-face/line-gap-override")}}-Descriptors zurück und setzt ihn.
Die möglichen Werte sind `normal`, was anzeigt, dass das zu verwendende Metrikmaß aus der Schriftdatei entnommen werden sollte, oder ein Prozentsatz.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
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
