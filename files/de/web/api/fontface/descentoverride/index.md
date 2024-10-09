---
title: "FontFace: descentOverride-Eigenschaft"
short-title: descentOverride
slug: Web/API/FontFace/descentOverride
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`descentOverride`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces gibt den Wert des {{cssxref("@font-face/descent-override")}}-Descriptors zurück und legt ihn fest.
Mögliche Werte sind `normal`, was bedeutet, dass das verwendete Maß aus der Schriftartdatei stammen sollte, oder ein Prozentsatz.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { descentOverride: "90%" },
);
console.log(fontFace.descentOverride); // 90%
fontFace.descentOverride = "normal";
console.log(fontFace.descentOverride); // 'normal'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
