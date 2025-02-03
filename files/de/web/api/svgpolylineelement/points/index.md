---
title: "SVGPolylineElement: points-Eigenschaft"
short-title: points
slug: Web/API/SVGPolylineElement/points
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die **`points`**-Eigenschaft der [`SVGPolylineElement`](/de/docs/Web/API/SVGPolylineElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Basiswert (d.h. den statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements widerspiegelt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt werden im {{SVGAttr("points")}}-Attribut sowie umgekehrt übernommen.

## Wert

Ein [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt.

## Beispiele

### Zugriff auf die `points`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polyline
    id="myPolyline"
    points="100,10 150,50 100,90 50,50"
    fill="none"
    stroke="blue"
    stroke-width="4" />
</svg>
```

```js
const polylineElement = document.getElementById("myPolyline");

// Access the points property
console.dir(polylineElement.points); // Output: SVGPointList object containing points (100,10), (150,50), (100,90), (50,50)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
