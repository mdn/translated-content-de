---
title: "FontFace: ascentOverride-Eigenschaft"
short-title: ascentOverride
slug: Web/API/FontFace/ascentOverride
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`ascentOverride`**-Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace)-Schnittstelle gibt die Aufwärtsmetrik der Schrift zurück und legt sie fest. Dies bezeichnet die Höhe über der Grundlinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungskontext anzuordnen.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/ascent-override")}} Deskriptor von {{cssxref("@font-face")}}.

## Wert

Ein String. Die möglichen Werte sind `normal`, was bedeutet, dass die verwendete Metrik aus der Schriftdatei bezogen werden sollte, oder ein Prozentsatz.

Diese Eigenschaft akzeptiert die gleichen Werte wie der {{cssxref("@font-face/ascent-override")}} Deskriptor.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { ascentOverride: "90%" },
);
console.log(fontFace.ascentOverride); // 90%
fontFace.ascentOverride = "normal";
console.log(fontFace.ascentOverride); // 'normal'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
