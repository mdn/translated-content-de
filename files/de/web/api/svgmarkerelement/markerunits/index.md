---
title: "SVGMarkerElement: markerUnits-Eigenschaft"
short-title: markerUnits
slug: Web/API/SVGMarkerElement/markerUnits
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die schreibgeschützte **`markerUnits`**-Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt zurück. Dieses Objekt gibt eine Ganzzahl zurück, die die Schlüsselwortwerte repräsentiert, die das {{SVGattr("markerUnits")}}-Attribut akzeptiert.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts enthält einen der folgenden Werte:

- `0`
  - : `SVG_MARKERUNITS_UNKNOWN`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut einen anderen Wert als die zwei vordefinierten Schlüsselwörter hat.
- `1`
  - : `SVG_MARKERUNITS_USERSPACEONUSE`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut das Schlüsselwort `userSpaceOnUse` hat.
- `2`
  - : `SVG_MARKERUNITS_STROKEWIDTH`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut das Schlüsselwort `strokeWidth` hat.

## Beispiele

Die `markerUnits`-Eigenschaft gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt zurück, das den Wert des {{SVGattr("markerUnits")}}-Attributs enthält.

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
      orient="auto-start-reverse"
      markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.markerUnits.baseVal); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
