---
title: "SVGPolygonElement: Eigenschaft points"
short-title: points
slug: Web/API/SVGPolygonElement/points
l10n:
  sourceCommit: 9f9f880fa78383de963ae215204531c96715c0ea
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`points`** des [`SVGPolygonElement`](/de/docs/Web/API/SVGPolygonElement)-Interfaces spiegelt den Basiswert (d.h. statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements wider. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt werden im {{SVGAttr("points")}}-Attribut widergespiegelt und umgekehrt.

## Wert

Ein [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt.

## Beispiele

### Zugriff auf die `points`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue" />
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// Access the points property
console.dir(polygonElement.points); // Output: SVGPointList object containing points (100,10), (150,50), (100,90), (50,50)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
