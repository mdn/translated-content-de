---
title: "SVGMarkerElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGMarkerElement/viewBox
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

Die schreibgeschützte **`viewBox`**-Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle gibt ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt zurück, das die durch das {{SVGattr("viewBox")}}-Attribut auf dem {{SVGElement("marker")}} gesetzten Werte enthält.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt zurück, aus dem die `x`- und `y`-Koordinaten sowie die `width` und `height` des {{SVGElement("marker")}}-{{SVGattr("viewBox")}}-Attributs zurückgegeben werden können.

## Beispiele

Dieses Beispiel zeigt, wie der Wert der für das {{SVGattr("viewBox")}}-Attribut des {{SVGElement("marker")}} gesetzten `width` zurückgegeben wird.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      preserveAspectRatio="xMidYMid meet"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
const marker = document.getElementById("arrow");
console.log(marker.viewBox.baseVal.width); // 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
