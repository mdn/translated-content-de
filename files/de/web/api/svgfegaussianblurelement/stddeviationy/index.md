---
title: "SVGFEGaussianBlurElement: stdDeviationY-Eigenschaft"
short-title: stdDeviationY
slug: Web/API/SVGFEGaussianBlurElement/stdDeviationY
l10n:
  sourceCommit: d8f5fcc34fed682a8085ea71a89223d73594ec03
---

{{APIRef("SVG")}}

Die **`stdDeviationY`** schreibgeschützte Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interface spiegelt die (möglicherweise automatisch berechnete) Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen {{SVGElement("feGaussianBlur")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `stdDeviationY`-Attribut

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <!-- Apply Gaussian Blur with stdDeviationY set to 5 and stdDeviationY set to 10 -->
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="5 10"
        result="blurred-graphic" />
    </filter>
  </defs>

  <!-- Rectangle with a Gaussian blur effect -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:hotpink;"
    filter="url(#gaussian-blur-filter)" />
</svg>
```

```js
// Select the feGaussianBlur element
const gaussianBlur = document.querySelector("feGaussianBlur");

// Access the stdDeviationY value
console.log(gaussianBlur.stdDeviationY.baseVal); // Output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
