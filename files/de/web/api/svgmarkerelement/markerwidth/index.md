---
title: "SVGMarkerElement: markerWidth-Eigenschaft"
short-title: markerWidth
slug: Web/API/SVGMarkerElement/markerWidth
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`markerWidth`** schreibgeschützte Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das die Breite des {{SVGElement("marker")}}-Viewports enthält, wie durch das {{SVGattr("markerWidth")}}-Attribut definiert.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGLength`](/de/docs/Web/API/SVGLength) zurück, dessen Wert die `Breite` zurückgibt.

## Beispiele

Die `markerWidth`-Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das ein [`SVGLength`](/de/docs/Web/API/SVGLength) mit dem Wert des {{SVGattr("markerWidth")}}-Attributs enthält.

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
console.log(marker.markerWidth.baseVal.value); // 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
