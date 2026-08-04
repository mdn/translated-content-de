---
title: "CSSUnitValue: CSSUnitValue() Konstruktor"
short-title: CSSUnitValue()
slug: Web/API/CSSUnitValue/CSSUnitValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSUnitValue()`** Konstruktor erstellt ein neues [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekt, das ein neues [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekt zurückgibt, welches Werte repräsentiert, die einen einzelnen Einheitstyp enthalten.
Zum Beispiel würde "42px" durch einen `CSSNumericValue` repräsentiert.

## Syntax

```js-nolint
new CSSUnitValue(value, unit)
```

### Parameter

- `value`
  - : Ein Doppelwert, der die Anzahl der Einheiten angibt.
- `unit`
  - : Ein String, der den Einheitstyp angibt.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine Methode zur Erstellung eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen `CSSUnitValue` Konstruktoren.

```js
let pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
