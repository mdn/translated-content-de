---
title: "FontFace: ascentOverride-Eigenschaft"
short-title: ascentOverride
slug: Web/API/FontFace/ascentOverride
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`ascentOverride`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces gibt die Steigmetrik der Schriftart zurück und setzt diese, also die Höhe über der Grundlinie, die CSS verwendet, um Linienkästen in einem Inline-Formatierungskontext zu layouten.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/ascent-override")}}-Deskriptor von {{cssxref("@font-face")}}.

## Wert

Ein String. Die möglichen Werte sind `normal`, was darauf hinweist, dass die Metrik aus der Schriftartendatei bezogen werden sollte, oder ein Prozentsatz.

Diese Eigenschaft akzeptiert dieselben Werte wie der {{cssxref("@font-face/ascent-override")}}-Deskriptor.

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
