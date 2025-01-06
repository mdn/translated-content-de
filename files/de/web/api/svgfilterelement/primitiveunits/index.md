---
title: "SVGFilterElement: primitiveUnits-Eigenschaft"
short-title: primitiveUnits
slug: Web/API/SVGFilterElement/primitiveUnits
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die schreibgeschützte **`primitiveUnits`**-Eigenschaft der [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle spiegelt das {{SVGAttr("primitiveUnits")}}-Attribut des gegebenen {{SVGElement("filter")}}-Elements wider. Sie nimmt einen der `SVG_UNIT_TYPE_*` Konstanten an, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `primitiveUnits`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter
      id="myFilter"
      primitiveUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200%"
      height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blurred" />
    </filter>
  </defs>
  <rect
    width="200"
    height="200"
    stroke="green"
    stroke-width="10"
    fill="lime"
    filter="url(#myFilter)" />
</svg>
```

```js
const filterElement = document.querySelector("filter");

// Access the primitiveUnits property
console.log(filterElement.primitiveUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFilterElement.filterUnits`](/de/docs/Web/API/SVGFilterElement/filterUnits)
