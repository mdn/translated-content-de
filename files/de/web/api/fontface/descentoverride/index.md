---
title: "FontFace: descentOverride-Eigenschaft"
short-title: descentOverride
slug: Web/API/FontFace/descentOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`descentOverride`**-Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle gibt den Wert des {{cssxref("@font-face/descent-override")}}-Descriptors zurück und setzt diesen. Die möglichen Werte sind `normal`, was anzeigt, dass die Metrik aus der Schriftartdatei bezogen werden sollte, oder ein Prozentsatz.

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
