---
title: "SVGFEColorMatrixElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEColorMatrixElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`**-Eigenschaft der Schnittstelle [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement) ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("in")}}-Attribut des gegebenen Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel sind zwei {{SVGElement("feColorMatrix")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="color-matrix-filter">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
    <feColorMatrix
      in="BackgroundImage"
      type="matrix"
      values="0.5 0 0 0 0 0 0.5 0 0 0 0 0 0.5 0 0 0 0 0 1 0" />
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

Wir können auf das `in`-Attribut zugreifen:

```js
const colorMatrices = document.querySelectorAll("feColorMatrix");

console.log(colorMatrices[0].in1.baseVal); // Output: "SourceGraphic"
console.log(colorMatrices[1].in1.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
