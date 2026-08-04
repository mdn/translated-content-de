---
title: "CSSUnitValue: value-Eigenschaft"
short-title: value
slug: Web/API/CSSUnitValue/value
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSUnitValue.value`**-Eigenschaft der [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Schnittstelle gibt ein Double zurück, das die Anzahl der Einheiten angibt.

## Wert

Ein Double.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt einen [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue`-Konstruktoren und fragt dann den `CSSUnitValue.value` ab.

```js
const pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);

console.log(pos.x.value); // 5
console.log(pos.y.value); // 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
