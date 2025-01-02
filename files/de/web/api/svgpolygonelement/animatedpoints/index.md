---
title: "SVGPolygonElement: Eigenschaft animatedPoints"
short-title: animatedPoints
slug: Web/API/SVGPolygonElement/animatedPoints
l10n:
  sourceCommit: 9f9f880fa78383de963ae215204531c96715c0ea
---

{{APIRef("SVG")}}

Die **`animatedPoints`** schreibgeschützte Eigenschaft des [`SVGPolygonElement`](/de/docs/Web/API/SVGPolygonElement)-Interfaces spiegelt den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements wider. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.

## Wert

Ein [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt.

## Beispiele

### Zugriff auf die `animatedPoints`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue">
    <animate
      attributeName="points"
      values="100,10 150,50 100,90 50,50; 150,10 200,50 150,90 100,50"
      dur="2s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// Access the animatedPoints property
console.dir(polygonElement.animatedPoints); // Output: SVGPointList object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
