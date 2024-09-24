---
title: "SVGMarkerElement: refY-Eigenschaft"
short-title: refY
slug: Web/API/SVGMarkerElement/refY
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`refY`** der {{domxref("SVGMarkerElement")}}-Schnittstelle gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das den Wert des {{SVGattr("refY")}}-Attributs des {{SVGElement("marker")}} enthält.

## Wert

Ein {{domxref("SVGAnimatedLength")}}-Objekt. Die Eigenschaft `baseVal` dieses Objekts gibt ein {{domxref("SVGLength")}} zurück, dessen Wert den `refY` zurückgibt.

## Beispiele

Die Eigenschaft `markerWidth` gibt ein {{domxref("SVGAnimatedLength")}} zurück, das ein {{domxref("SVGLength")}} enthält, mit dem Wert des {{SVGattr("refY")}}-Attributs.

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
console.log(marker.refY.baseVal.value); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
