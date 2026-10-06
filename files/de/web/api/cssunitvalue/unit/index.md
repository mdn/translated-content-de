---
title: "CSSUnitValue: Eigenschaft unit"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: 875807e56bc01cc7cb65b1d2217de5b9dfa476d9
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`unit`** der Schnittstelle [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) gibt einen String zurück, der den [Einheitentyp](/de/docs/Web/CSS/Guides/Values_and_units#units) angibt.

## Wert

Ein String, der den Einheitentyp angibt, beispielsweise `"em"`, `"px"` oder `"percent"`.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt einen [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue`-Konstruktoren und fragt anschließend `CSSUnitValue.unit` ab.

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
- [Numerische CSS-Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units), eine Liste aller möglichen Einheitentypen
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
