---
title: "SVGGeometryElement: isPointInStroke()-Methode"
short-title: isPointInStroke()
slug: Web/API/SVGGeometryElement/isPointInStroke
l10n:
  sourceCommit: 1e801c9388a8e7ae368f6c3759aabf23eabbb1d7
---

{{APIRef("SVG")}}

Die **`isPointInStroke()`**-Methode des [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)-Interfaces bestimmt, ob ein gegebener Punkt innerhalb der Umrissform eines Elements liegt. Das `point`-Argument wird als Punkt im lokalen Koordinatensystem des Elements interpretiert.

## Syntax

```js-nolint
isPointInStroke(point)
```

### Parameter

- `point`
  - : Ein Objekt, das einen Punkt darstellt, der im lokalen Koordinatensystem des Elements interpretiert wird. Es wird mit demselben Algorithmus in ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt umgewandelt wie [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static).

### Rückgabewert

Ein boolescher Wert, der angibt, ob der gegebene Punkt innerhalb des Umrisses liegt oder nicht.

## Beispiele

### SVG

```html
<svg
  viewBox="0 0 100 100"
  width="150"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="45"
    fill="rgb(0 0 0 / 25%)"
    stroke="rgb(0 0 0 / 50%)"
    stroke-width="10" />
</svg>
```

### JavaScript

```js
const svg = document.getElementsByTagName("svg")[0];
const circle = document.getElementById("circle");
const points = [
  [10, 10],
  [40, 30],
  [70, 40],
  [15, 75],
  [83, 83],
];

for (const point of points) {
  let isPointInStroke;

  try {
    const pointObj = { x: point[0], y: point[1] };
    isPointInStroke = circle.isPointInStroke(pointObj);
  } catch {
    // Fallback for browsers that don't support DOMPoint as an argument
    const pointObj = svg.createSVGPoint();
    pointObj.x = point[0];
    pointObj.y = point[1];
    isPointInStroke = circle.isPointInStroke(pointObj);
  }

  console.log(`Point at ${point[0]},${point[1]}: ${isPointInStroke}`);

  const pointEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  pointEl.cx.baseVal.value = point[0];
  pointEl.cy.baseVal.value = point[1];
  pointEl.r.baseVal.value = 5;
  const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (isPointInStroke) {
    pointEl.setAttribute("fill", "rgb(0 170 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10 m -5 -5 v 10`);
  } else {
    pointEl.setAttribute("fill", "rgb(170 0 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10`);
  }
  svg.append(pointEl, pathEl);
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "150", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
