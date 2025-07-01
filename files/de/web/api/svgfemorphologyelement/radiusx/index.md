---
title: "SVGFEMorphologyElement: radiusX-Eigenschaft"
short-title: radiusX
slug: Web/API/SVGFEMorphologyElement/radiusX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`radiusX`**-Eigenschaft der [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Schnittstelle, die nur gelesen werden kann, spiegelt die X-Komponente des {{SVGAttr("radius")}}-Attributs des angegebenen {{SVGElement("feMorphology")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `radiusX`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter with a specific radius -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="5 3" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="lightblue"
    filter="url(#morphologyFilter)" />
</svg>
```

```js
// Select the feMorphology element
const morphologyNode = document.querySelector("feMorphology");

// Access the radiusX property
const radiusX = morphologyNode.radiusX.baseVal;

console.log(`The X radius is: ${radiusX}`); // Output: 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
