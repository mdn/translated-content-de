---
title: "SVGGeometryElement: isPointInFill()-Methode"
short-title: isPointInFill()
slug: Web/API/SVGGeometryElement/isPointInFill
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("SVG")}}

Die **`SVGGeometryElement.isPointInFill()`**-Methode bestimmt, ob ein gegebener Punkt innerhalb der Füllung einer Form eines Elements liegt. Normale Regeln für das Hit-Testing gelten; der Wert der {{cssxref("pointer-events")}}-Eigenschaft des Elements bestimmt, ob ein Punkt als innerhalb der Füllung betrachtet wird. Das `point`-Argument wird als ein Punkt im lokalen Koordinatensystem des Elements interpretiert.

## Syntax

```js-nolint
isPointInFill(point)
```

### Parameter

- `point`
  - : Ein DOMPointInit-Objekt, das als Punkt im lokalen Koordinatensystem des Elements interpretiert wird.

### Rückgabewert

Ein Boolean, der angibt, ob der gegebene Punkt innerhalb der Füllung liegt oder nicht.

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
    fill="white"
    stroke="black"
    stroke-width="10" />
</svg>
```

### JavaScript

```js
const svg = document.getElementsByTagName("svg")[0];
const circle = document.getElementById("circle");
const points = [
  ["10", "10"],
  ["40", "30"],
  ["70", "40"],
  ["15", "75"],
  ["83", "83"],
];

for (const point of points) {
  let isPointInFill;

  try {
    const pointObj = new DOMPoint(point[0], point[1]);
    isPointInFill = circle.isPointInFill(pointObj);
  } catch (e) {
    // Fallback für Browser, die DOMPoint als Argument nicht unterstützen
    const pointObj = svg.createSVGPoint();
    pointObj.x = point[0];
    pointObj.y = point[1];
    isPointInFill = circle.isPointInFill(pointObj);
  }

  console.log(`Point at ${point[0]},${point[1]}: ${isPointInFill}`);

  const pointEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  pointEl.style.cx = point[0];
  pointEl.style.cy = point[1];
  pointEl.style.r = 5;
  pointEl.style.fill = isPointInFill ? "seagreen" : "rgb(255 0 0 / 50%)";
  svg.appendChild(pointEl);
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "150", "155")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
