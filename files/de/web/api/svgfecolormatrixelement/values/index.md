---
title: "SVGFEColorMatrixElement: values-Eigenschaft"
short-title: values
slug: Web/API/SVGFEColorMatrixElement/values
l10n:
  sourceCommit: b5f56e77f0fc3c786a1178eff5bbb89feffde91f
---

{{APIRef("SVG")}}

Die **`values`**-Schreibgeschützte Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle spiegelt das {{SVGAttr("values")}}-Attribut des angegebenen Elements wider.

## Wert

Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Objekt.

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
    style="fill:red;"
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
