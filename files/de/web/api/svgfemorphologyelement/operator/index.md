---
title: "SVGFEMorphologyElement: operator-Eigenschaft"
short-title: operator
slug: Web/API/SVGFEMorphologyElement/operator
l10n:
  sourceCommit: 55a2df9a3692842dc7cb9fd5440e41431678b537
---

{{APIRef("SVG")}}

Die **`operator`**-Eigenschaft der [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Schnittstelle gibt das {{SVGAttr("operator")}}-Attribut des angegebenen {{SVGElement("feMorphology")}}-Elements wieder. Sie nimmt einen der auf dieser Schnittstelle definierten `SVG_MORPHOLOGY_OPERATOR_*`-Konstanten an.

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
    style="fill:lightblue;"
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
