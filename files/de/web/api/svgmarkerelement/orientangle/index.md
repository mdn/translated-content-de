---
title: "SVGMarkerElement: orientAngle-Eigenschaft"
short-title: orientAngle
slug: Web/API/SVGMarkerElement/orientAngle
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`orientAngle`** schreibgeschützte Eigenschaft der {{domxref("SVGMarkerElement")}}-Schnittstelle gibt ein {{domxref("SVGAnimatedAngle")}}-Objekt zurück, das den Winkel des {{SVGattr("orient")}}-Attributs enthält.

## Wert

Ein {{domxref("SVGAnimatedAngle")}}-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein {{domxref("SVGAngle")}} zurück, dessen Wert den `angle` zurückgibt.

## Beispiele

Die `orientAngle`-Eigenschaft gibt ein {{domxref("SVGAnimatedAngle")}} zurück, das ein {{domxref("SVGAngle")}} enthält, mit dem Winkel, der durch das {{SVGattr("orient")}}-Attribut als Zahl in Grad angegeben ist, um den der Marker gedreht wird.

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
      orient=".5turn">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // 180 da .5turn 180 Grad sind.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
