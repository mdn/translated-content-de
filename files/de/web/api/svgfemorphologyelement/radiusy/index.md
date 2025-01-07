---
title: "SVGFEMorphologyElement: radiusY-Eigenschaft"
short-title: radiusY
slug: Web/API/SVGFEMorphologyElement/radiusY
l10n:
  sourceCommit: 55a2df9a3692842dc7cb9fd5440e41431678b537
---

{{APIRef("SVG")}}

Die schreibgeschützte **`radiusY`**-Eigenschaft des [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Interfaces spiegelt die Y-Komponente des {{SVGAttr("radius")}}-Attributs des gegebenen {{SVGElement("feMorphology")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `radiusY`-Eigenschaft

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
    style="fill:lightblue;"
    filter="url(#morphologyFilter)" />
</svg>
```

```js
// Select the feMorphology element
const morphologyNode = document.querySelector("feMorphology");

// Access the radiusY property
const radiusY = morphologyNode.radiusY.baseVal;

console.log(`The Y radius is: ${radiusY}`); // Output: 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
