---
title: "SVGMarkerElement: refX-Eigenschaft"
short-title: refX
slug: Web/API/SVGMarkerElement/refX
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`refX`**-Eigenschaft des {{domxref("SVGMarkerElement")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die ein {{domxref("SVGAnimatedLength")}}-Objekt zurückgibt, das den Wert des {{SVGattr("refX")}}-Attributs des {{SVGElement("marker")}}-Elements enthält.

## Wert

Ein {{domxref("SVGAnimatedLength")}}-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein {{domxref("SVGLength")}} zurück, dessen Wert dem `refX` entspricht.

## Beispiele

Die `markerWidth`-Eigenschaft gibt ein {{domxref("SVGAnimatedLength")}} zurück, das ein {{domxref("SVGLength")}} enthält, welches den Wert des {{SVGattr("refX")}}-Attributs darstellt.

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
console.log(marker.refX.baseVal.value); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
