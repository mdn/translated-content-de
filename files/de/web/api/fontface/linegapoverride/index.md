---
title: "FontFace: lineGapOverride-Eigenschaft"
short-title: lineGapOverride
slug: Web/API/FontFace/lineGapOverride
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`lineGapOverride`**-Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle gibt den Wert des {{cssxref("@font-face/line-gap-override")}}-Deskriptors zurück oder setzt ihn. Die möglichen Werte sind `normal`, was bedeutet, dass die zu verwendende Metrik aus der Schriftart-Datei bezogen werden sollte, oder ein Prozentsatz.

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
