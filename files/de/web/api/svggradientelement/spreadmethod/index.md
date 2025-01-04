---
title: "SVGGradientElement: spreadMethod Eigenschaft"
short-title: spreadMethod
slug: Web/API/SVGGradientElement/spreadMethod
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

Die **`spreadMethod`** Eigenschaft der [`SVGGradientElement`](/de/docs/Web/API/SVGGradientElement) Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("spreadMethod")}} Attribut des angegebenen Elements widerspiegelt. Sie nimmt einen der `SVG_SPREADMETHOD_*` Konstanten an, die in dieser Schnittstelle definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

## Beispiele

### Zugriff auf die `spreadMethod` Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient2" spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.spreadMethod.baseVal); // Output: 2 (SVG_SPREADMETHOD_REFLECT)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
