---
title: "SVGFEColorMatrixElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGFEColorMatrixElement/type
l10n:
  sourceCommit: b5f56e77f0fc3c786a1178eff5bbb89feffde91f
---

{{APIRef("SVG")}}

Die **`type`**-Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("type")}}-Attribut des angegebenen Elements widerspiegelt. Sie nimmt einen der `SVG_FECOLORMATRIX_TYPE_*`-Konstanten an, die auf dieser Schnittstelle definiert sind.

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
    style="fill:red;"
    filter="url(#color-matrix-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
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
