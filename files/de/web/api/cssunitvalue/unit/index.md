---
title: "CSSUnitValue: unit-Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`CSSUnitValue.unit`** des [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Interfaces gibt einen String zurück, der den [Einheitstyp](/de/docs/Web/CSS/Guides/Values_and_units#units) angibt.

## Wert

Ein String, der den Einheitstyp angibt, wie z.B. `"em"`, `"px"`, `"%"`, usw.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue` Konstruktoren und fragt dann das `CSSUnitValue.unit` ab.

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
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
