---
title: "CSSUnitValue: unit Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: efab12f729b549406b2e0789a87590572f5af6af
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue.unit`** schreibgeschützte Eigenschaft
der [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Schnittstelle gibt einen String zurück,
der den [Einheitstyp](/de/docs/Web/CSS/Guides/Values_and_units#units) angibt.

## Wert

Ein String, der den Einheitstyp angibt, wie zum Beispiel `"em"`, `"px"`, `"%"`, etc.

## Beispiele

Das folgende Beispiel erstellt ein [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen
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
- [CSS numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units), eine Auflistung aller möglichen Einheitstypen
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typisiertes Objektmodell API](/de/docs/Web/API/CSS_Typed_OM_API)
