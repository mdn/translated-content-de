---
title: "SVGPolylineElement: animatedPoints-Eigenschaft"
short-title: animatedPoints
slug: Web/API/SVGPolylineElement/animatedPoints
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animatedPoints`** des [`SVGPolylineElement`](/de/docs/Web/API/SVGPolylineElement)-Interfaces spiegelt den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements wider. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.

## Wert

Ein [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt.

## Beispiele

### Zugriff auf die `animatedPoints`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polyline
    id="myPolyline"
    points="100,10 150,50 100,90 50,50"
    fill="none"
    stroke="blue"
    stroke-width="4">
    <animate
      attributeName="points"
      values="100,10 150,50 100,90 50,50; 150,10 200,50 150,90 100,50"
      dur="2s"
      repeatCount="indefinite" />
  </polyline>
</svg>
```

```js
const polylineElement = document.getElementById("myPolyline");

// Access the animatedPoints property
console.dir(polylineElement.animatedPoints); // Output: SVGPointList object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
