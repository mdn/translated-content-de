---
title: "FontFace: ascentOverride-Eigenschaft"
short-title: ascentOverride
slug: Web/API/FontFace/ascentOverride
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`ascentOverride`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces gibt den Aufstiegsmetriken für die Schriftart zurück und setzt ihn fest. Dieser bezieht sich auf die Höhe über der Grundlinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungskontext zu layouten.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/ascent-override")}}-Deskriptor von {{cssxref("@font-face")}}.

## Wert

Ein String. Die möglichen Werte sind `normal`, was bedeutet, dass die zu verwendende Metrik aus der Schriftartdatei stammen sollte, oder ein Prozentsatz.

Diese Eigenschaft akzeptiert die gleichen Werte wie der {{cssxref("@font-face/ascent-override")}}-Deskriptor.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
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
