---
title: "SVGFEGaussianBlurElement: stdDeviationX-Eigenschaft"
short-title: stdDeviationX
slug: Web/API/SVGFEGaussianBlurElement/stdDeviationX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`stdDeviationX`** schreibgeschützte Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle gibt die (möglicherweise automatisch berechnete) X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des angegebenen {{SVGElement("feGaussianBlur")}}-Elements wieder.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `stdDeviationX`-Attribut

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <!-- Apply Gaussian Blur with stdDeviationX set to 5 and stdDeviationY set to 10 -->
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
    fill="hotpink"
    filter="url(#gaussian-blur-filter)" />
</svg>
```

```js
// Select the feGaussianBlur element
const gaussianBlur = document.querySelector("feGaussianBlur");

// Access the stdDeviationX value
console.log(gaussianBlur.stdDeviationX.baseVal); // Output: 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
