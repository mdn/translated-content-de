---
title: "FontFace: descentOverride-Eigenschaft"
short-title: descentOverride
slug: Web/API/FontFace/descentOverride
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`descentOverride`**-Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle gibt den Wert des {{cssxref("@font-face/descent-override")}}-Descriptors zurück und setzt ihn. Die möglichen Werte sind `normal`, was anzeigt, dass das Metrik aus der Schriftdatei bezogen werden sollte, oder ein Prozentsatz.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
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
