---
title: "SVGFEColorMatrixElement: Werte-Eigenschaft"
short-title: values
slug: Web/API/SVGFEColorMatrixElement/values
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`values`** schreibgeschützte Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement) Schnittstelle spiegelt das {{SVGAttr("values")}} Attribut des angegebenen Elements wider.

## Wert

Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList) Objekt.

## Beispiele

### Zugriff auf die `values`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#color-matrix-filter)" />
</svg>
```

```js
const colorMatrix = document.querySelector("feColorMatrix");

console.dir(colorMatrix.values.baseVal); // Output: SVGAnimatedNumberList object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
