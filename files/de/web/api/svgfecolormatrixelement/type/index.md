---
title: "SVGFEColorMatrixElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGFEColorMatrixElement/type
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`type`**-Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle spiegelt das {{SVGAttr("type")}}-Attribut des gegebenen Elements wider. Sie nimmt einen der `SVG_FECOLORMATRIX_TYPE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `type`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
    <feColorMatrix type="saturate" values="0.5" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#color-matrix-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
    filter="url(#color-matrix-filter)" />
</svg>
```

```js
const colorMatrices = document.querySelectorAll("feColorMatrix");

console.log(colorMatrices[0].type.baseVal); // Output: 1 (SVG_FECOLORMATRIX_TYPE_MATRIX)
console.log(colorMatrices[1].type.baseVal); // Output: 2 (SVG_FECOLORMATRIX_TYPE_SATURATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
