---
title: "CSSUnitValue: unit-Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Typed Object Model API")}}

Die schreibgeschützte Eigenschaft **`CSSUnitValue.unit`** der Schnittstelle [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) gibt einen String zurück, der den Typ der Einheit angibt.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt einen [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue` Konstruktoren und fragt anschließend die `CSSUnitValue.unit` ab.

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
- [Abmessungen in CSS-Werten und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#dimensions)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
