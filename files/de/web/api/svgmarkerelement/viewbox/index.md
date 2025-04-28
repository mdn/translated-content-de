---
title: "SVGMarkerElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGMarkerElement/viewBox
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("SVG")}}

Die **`viewBox`** schreibgeschützte Eigenschaft des [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Interfaces liefert ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt zurück, das die Werte enthält, die durch das {{SVGattr("viewBox")}}-Attribut auf dem {{SVGElement("marker")}} gesetzt wurden.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt zurück, aus dem die `x`- und `y`-Koordinaten sowie die `width` und `height` des {{SVGElement("marker")}}-{{SVGattr("viewBox")}}-Attributs abgerufen werden können.

## Beispiele

Dieses Beispiel zeigt, wie der Wert der `width`, die für das {{SVGattr("viewBox")}}-Attribut des {{SVGElement("marker")}} festgelegt wurde, abgerufen werden kann.

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
const marker = document.getElementById("arrow");
console.log(marker.viewBox.baseVal.width); // 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
