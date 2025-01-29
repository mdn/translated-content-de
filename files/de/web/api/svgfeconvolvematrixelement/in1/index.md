---
title: "SVGFEConvolveMatrixElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEConvolveMatrixElement/in1
l10n:
  sourceCommit: 804a3f25cfa764e3dbdb87acb90f9fb5118c1425
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feConvolveMatrix")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel wendet das `<feConvolveMatrix>`-Element einen Faltungsfilter auf eine Eingabegrafik an, die durch das `in`-Attribut angegeben wird.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="convolveFilter">
      <feConvolveMatrix
        in="SourceGraphic"
        order="3"
        kernelMatrix="0 -1 0 -1 4 -1 0 -1 0" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#convolveFilter)" />
</svg>
```

Wir können auf das `in`-Attribut des `<feConvolveMatrix>`-Elements zugreifen.

```js
const convolveMatrix = document.querySelector("feConvolveMatrix");

console.log(convolveMatrix.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
