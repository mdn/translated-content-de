---
title: "SVGFEConvolveMatrixElement: bias-Eigenschaft"
short-title: bias
slug: Web/API/SVGFEConvolveMatrixElement/bias
l10n:
  sourceCommit: 804a3f25cfa764e3dbdb87acb90f9fb5118c1425
---

{{APIRef("SVG")}}

Die schreibgeschützte **`bias`**-Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces spiegelt das {{SVGAttr("bias")}}-Attribut des gegebenen {{SVGElement("feConvolveMatrix")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `bias`-Eigenschaft

Die `bias`-Eigenschaft wird verwendet, um die Helligkeit der Ausgabe anzupassen.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilterWithBias">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"
        bias="0.25" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#convolveFilterWithBias)" />
</svg>
```

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.bias.baseVal); // Output: 0.25
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
