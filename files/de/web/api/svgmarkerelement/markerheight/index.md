---
title: "SVGMarkerElement: markerHeight-Eigenschaft"
short-title: markerHeight
slug: Web/API/SVGMarkerElement/markerHeight
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`markerHeight`** schreibgeschützte Eigenschaft des {{domxref("SVGMarkerElement")}}-Interfaces gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das die Höhe des Ansichtsbereichs des {{SVGElement("marker")}} enthält, wie durch das {{SVGattr("markerHeight")}}-Attribut definiert.

## Wert

Ein {{domxref("SVGAnimatedLength")}}-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein {{domxref("SVGLength")}} zurück, dessen Wert die `height` zurückgibt.

## Beispiele

Die `markerHeight`-Eigenschaft gibt ein {{domxref("SVGAnimatedLength")}} zurück, das ein {{domxref("SVGLength")}} mit dem Wert des {{SVGattr("markerHeight")}}-Attributs enthält.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.markerHeight.baseVal.value); // 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
