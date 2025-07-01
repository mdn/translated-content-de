---
title: "SVGFEMorphologyElement: operator-Eigenschaft"
short-title: operator
slug: Web/API/SVGFEMorphologyElement/operator
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`operator`** schreibgeschützte Eigenschaft des [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Interfaces spiegelt das {{SVGAttr("operator")}}-Attribut des gegebenen {{SVGElement("feMorphology")}}-Elements wider. Sie nimmt einen der `SVG_MORPHOLOGY_OPERATOR_*`-Konstanten an, die auf dieser Schnittstelle definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `operator`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter with the "dilate" operator -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="3" />
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

// Access the 'operator' property
const operatorEnum = morphologyNode.operator.baseVal;

console.log(operatorEnum); // Output: 2 (SVG_MORPHOLOGY_OPERATOR_DILATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
