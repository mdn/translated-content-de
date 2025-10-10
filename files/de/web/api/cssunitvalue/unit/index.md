---
title: "CSSUnitValue: unit-Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue.unit`** schreibgeschützte Eigenschaft
des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Interfaces gibt einen Zeichenfolgenwert zurück,
der den Einheitstyp angibt.

## Wert

Eine Zeichenfolge.

## Beispiele

Das folgende Beispiel erstellt ein [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen
`CSSUnitValue` Konstruktoren und fragt dann die
`CSSUnitValue.unit` ab.

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
- [Dimensionen in CSS-Werten und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#dimensions)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
