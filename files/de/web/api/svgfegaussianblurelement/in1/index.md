---
title: "SVGFEGaussianBlurElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEGaussianBlurElement/in1
l10n:
  sourceCommit: d8f5fcc34fed682a8085ea71a89223d73594ec03
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interfaces spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feGaussianBlur")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feGaussianBlur")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <!-- Gaussian blur applied to the SourceGraphic -->
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="5"
        result="blurred-source" />
      <!-- Gaussian blur applied to the BackgroundImage -->
      <feGaussianBlur
        in="BackgroundImage"
        stdDeviation="10"
        result="blurred-background" />
    </filter>
  </defs>

  <!-- Rectangle with SourceGraphic blur effect -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:rebeccapurple;"
    filter="url(#gaussian-blur-filter)" />

  <!-- Circle with BackgroundImage blur effect -->
  <circle
    cx="150"
    cy="100"
    r="50"
    style="fill:hotpink;"
    filter="url(#gaussian-blur-filter)" />
</svg>
```

Wir können auf das `in`-Attribut zugreifen:

```js
// Get all feGaussianBlur elements
const gaussianBlurs = document.querySelectorAll("feGaussianBlur");

// Access the 'in' attribute values
console.log(gaussianBlurs[0].in1.baseVal); // Output: "SourceGraphic"
console.log(gaussianBlurs[1].in1.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
