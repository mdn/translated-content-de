---
title: "SVGFEMorphologyElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEMorphologyElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`**-schreibgeschützte Eigenschaft des [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Interfaces spiegelt das {{SVGAttr("in")}}-Attribut des angegebenen {{SVGElement("feMorphology")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feMorphology`-Elements

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="morphologyFilter">
      <!-- Applies a morphology filter to the SourceGraphic -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="2" />
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

Wir können auf das `in`-Attribut des `feMorphology`-Elements zugreifen.

```js
// Select the feMorphology element
const morphologyNode = document.querySelector("feMorphology");
console.log(morphologyNode.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
