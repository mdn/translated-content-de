---
title: "SVGAnimatedLength: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedLength/baseVal
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Interfaces enthält den Anfangswert einer SVG-Enumeration.

## Wert

Ein [`SVGLength`](/de/docs/Web/API/SVGLength), der den Anfangswert der Länge enthält.

## Beispiele

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20px" fill="gold" id="circle"></circle>
</svg>
<pre id="log"></pre>
```

```js
const unit = [
  "unknown",
  "",
  "%",
  "em",
  "ex",
  "px",
  "cm",
  "mm",
  "in",
  "pt",
  "pc",
];
const circle = document.getElementById("circle");
const log = document.getElementById("log");
const baseValue = circle.r.baseVal.value;
const baseUnit = unit[circle.r.baseVal.unitType];

log.textContent = `The 'circle.r.baseVal' is ${baseValue} (in ${baseUnit}).`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength.animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal)
