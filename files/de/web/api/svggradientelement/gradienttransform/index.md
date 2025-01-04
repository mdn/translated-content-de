---
title: "SVGGradientElement: gradientTransform-Eigenschaft"
short-title: gradientTransform
slug: Web/API/SVGGradientElement/gradientTransform
l10n:
  sourceCommit: 178630ac2e57afefc585624dc8cf2bc487294eb0
---

{{APIRef("SVG")}}

Die **`gradientTransform`** schreibgeschützte Eigenschaft der [`SVGGradientElement`](/de/docs/Web/API/SVGGradientElement)-Schnittstelle spiegelt das {{SVGAttr("gradientTransform")}}-Attribut des angegebenen Elements wider.

## Wert

Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList).

## Beispiele

### Zugriff auf die `gradientTransform`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <linearGradient id="gradient3" gradientTransform="rotate(45)">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="180" height="180" fill="url(#gradient3)" />
</svg>
```

```js
// Accessing the gradientTransform property
const gradient = document.getElementById("gradient3");
console.dir(gradient.gradientTransform.baseVal);
// Output: SVGTransformList object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
