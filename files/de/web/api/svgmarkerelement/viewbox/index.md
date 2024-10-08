---
title: "SVGMarkerElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGMarkerElement/viewBox
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die schreibgeschützte **`viewBox`**-Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle gibt ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt zurück, das die durch das {{SVGattr("viewBox")}}-Attribut am {{SVGElement("marker")}} festgelegten Werte enthält.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt zurück, aus dem die `x`- und `y`-Koordinaten sowie die `width` und `height` des {{SVGElement("marker")}}-{{SVGattr("viewBox")}}-Attributs abgerufen werden können.

## Beispiele

Dieses Beispiel zeigt, wie der für das {{SVGattr("viewBox")}}-Attribut von {{SVGElement("marker")}} festgelegte `width`-Wert zurückgegeben wird.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      viewBox="xMidYMid meet"
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
console.log(marker.viewBox.baseVal.width); //10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
