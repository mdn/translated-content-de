---
title: "SVGGradientElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGGradientElement/href
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

Die **`href`**-Eigenschaft der [`SVGGradientElement`](/de/docs/Web/API/SVGGradientElement)-Schnittstelle, die nur gelesen werden kann, spiegelt das {{SVGAttr("href")}} oder das {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="gradient2" href="#gradient1" />
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient2)" />
</svg>
```

```js
const gradient = document.getElementById("gradient2");
console.log(gradient.href.baseVal); // Output: "#gradient1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
