---
title: "CSSUnitValue: unit-Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{APIRef("CSS Typed Object Model API")}}

Die schreibgeschützte Eigenschaft **`CSSUnitValue.unit`** des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Interfaces gibt einen String zurück, der den Einheitstyp angibt.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt einen [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue`-Konstruktoren und fragt dann die `CSSUnitValue.unit` ab.

```js
const pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "em"),
);

console.log(pos.x.unit); // "px"
console.log(pos.y.unit); // "em"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
- [Dimensionen in CSS-Werten und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#dimensions)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
