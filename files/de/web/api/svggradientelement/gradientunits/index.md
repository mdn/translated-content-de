---
title: "SVGGradientElement: gradientUnits-Eigenschaft"
short-title: gradientUnits
slug: Web/API/SVGGradientElement/gradientUnits
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

Die **`gradientUnits`** Eigenschaft der [`SVGGradientElement`](/de/docs/Web/API/SVGGradientElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("gradientUnits")}}-Attribut des gegebenen Elements widerspiegelt. Sie nimmt einen der `SVG_UNIT_TYPE_*` Konstanten an, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.

## Wert

Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

## Beispiele

### Zugriff auf die `gradientUnits`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient1)" />
</svg>
```

```js
const gradient = document.getElementById("gradient1");
console.log(gradient.gradientUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
