---
title: "SVGPointList: numberOfItems-Eigenschaft"
short-title: numberOfItems
slug: Web/API/SVGPointList/numberOfItems
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`numberOfItems`**-Eigenschaft, welche schreibgeschützt ist, des [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Interfaces gibt die Anzahl der Elemente in der Liste zurück.

## Wert

Die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die `numberOfItems`-Eigenschaft gibt `5` zurück.

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
console.log(example.points.numberOfItems); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
