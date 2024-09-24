---
title: "SVGPointList: length-Eigenschaft"
short-title: length
slug: Web/API/SVGPointList/length
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("SVG")}}

Die **`length`** Schreibgeschützte Eigenschaft der {{domxref("SVGPointList")}} Schnittstelle gibt die Anzahl der Elemente in der Liste zurück.

## Wert

Die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die `length`-Eigenschaft gibt `5` zurück.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
let example = document.getElementById("example");
console.log(example.points.length); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
