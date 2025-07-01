---
title: "SVGFEConvolveMatrixElement: divisor-Eigenschaft"
short-title: divisor
slug: Web/API/SVGFEConvolveMatrixElement/divisor
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`divisor`** Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle, die nur lesbar ist, spiegelt das {{SVGAttr("divisor")}} Attribut des angegebenen {{SVGElement("feConvolveMatrix")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `divisor`-Eigenschaft

Ein Faltungseffekt wird auf ein Rechteck angewendet, und der `divisor` wird verwendet, um die Helligkeit zu steuern.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilterWithDivisor">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 4 -1 0 -1 0"
        divisor="1" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="lightgreen"
    filter="url(#convolveFilterWithDivisor)" />
</svg>
```

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.divisor.baseVal); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
