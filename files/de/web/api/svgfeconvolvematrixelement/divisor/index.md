---
title: "SVGFEConvolveMatrixElement: divisor-Eigenschaft"
short-title: divisor
slug: Web/API/SVGFEConvolveMatrixElement/divisor
l10n:
  sourceCommit: 804a3f25cfa764e3dbdb87acb90f9fb5118c1425
---

{{APIRef("SVG")}}

Die schreibgeschützte **`divisor`**-Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces spiegelt das {{SVGAttr("divisor")}}-Attribut des gegebenen {{SVGElement("feConvolveMatrix")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `divisor`-Eigenschaft

Ein Faltungselement wird auf ein Rechteck angewendet, und `divisor` wird verwendet, um die Helligkeit zu steuern.

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
    style="fill:lightgreen;"
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
