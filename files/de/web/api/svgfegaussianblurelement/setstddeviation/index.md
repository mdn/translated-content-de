---
title: "SVGFEGaussianBlurElement: setStdDeviation() Methode"
short-title: setStdDeviation()
slug: Web/API/SVGFEGaussianBlurElement/setStdDeviation
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die `setStdDeviation()`-Methode der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle setzt die Werte für das {{SVGAttr("stdDeviation")}}-Attribut.

## Syntax

```js-nolint
setStdDeviation(x, y)
```

### Parameter

- `x`
  - : Ein Float, der die X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs darstellt.
- `y`
  - : Ein Float, der die Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs darstellt.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Verwendung von `setStdDeviation()`

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gaussian-blur-filter">
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="5 5"
        result="blurred-graphic" />
    </filter>
  </defs>

  <!-- Rectangle with an initial blur effect -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    fill="hotpink"
    filter="url(#gaussian-blur-filter)" />
</svg>

<!-- Button to update the blur -->
<button id="updateBlur">Update Blur</button>
```

```js
// Get the feGaussianBlur element
const gaussianBlur = document.querySelector("feGaussianBlur");

// Button to trigger the update
document.getElementById("updateBlur").addEventListener("click", () => {
  // Change the standard deviation (blur radius) of the blur effect
  gaussianBlur.setStdDeviation(15, 20); // Update to X: 15, Y: 20
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
