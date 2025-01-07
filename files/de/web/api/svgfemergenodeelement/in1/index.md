---
title: "SVGFEMergeNodeElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEMergeNodeElement/in1
l10n:
  sourceCommit: 55a2df9a3692842dc7cb9fd5440e41431678b537
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft der [`SVGFEMergeNodeElement`](/de/docs/Web/API/SVGFEMergeNodeElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feMergeNode")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feMergeNode`-Elements

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="mergeFilter">
      <!-- Merges two inputs -->
      <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="BackgroundImage" />
      </feMerge>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#mergeFilter)" />
</svg>
```

Wir können auf das `in`-Attribut des `feMergeNode`-Elements zugreifen.

```js
// Select the first feMergeNode element
const mergeNode = document.querySelector("feMergeNode");
console.log(mergeNode.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
