---
title: "SVGFilterElement: filterUnits-Eigenschaft"
short-title: filterUnits
slug: Web/API/SVGFilterElement/filterUnits
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`filterUnits`** des [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Interfaces spiegelt das {{SVGAttr("filterUnits")}}-Attribut des gegebenen {{SVGElement("filter")}}-Elements wider. Sie nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten `SVG_UNIT_TYPE_*`-Konstanten an.

## Wert

Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

## Beispiele

### Zugriff auf die `filterUnits`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter
      id="myFilter"
      filterUnits="userSpaceOnUse"
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

// Access the filterUnits property
console.log(filterElement.filterUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFilterElement.primitiveUnits`](/de/docs/Web/API/SVGFilterElement/primitiveUnits)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
