---
title: "SVGFilterElement: filterUnits-Eigenschaft"
short-title: filterUnits
slug: Web/API/SVGFilterElement/filterUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`filterUnits`**-Eigenschaft der [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle spiegelt das {{SVGAttr("filterUnits")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements wider. Sie nimmt einen der `SVG_UNIT_TYPE_*`-Konstanten an, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

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
- [SVG-Filter-Primitivattributen](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
