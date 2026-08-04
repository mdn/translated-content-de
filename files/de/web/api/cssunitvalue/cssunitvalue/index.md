---
title: "CSSUnitValue: CSSUnitValue() Konstruktor"
short-title: CSSUnitValue()
slug: Web/API/CSSUnitValue/CSSUnitValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSUnitValue()`**-Konstruktor erstellt ein neues [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekt, das Werte darstellt, die einen einzelnen Einheitentyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` dargestellt werden.

## Syntax

```js-nolint
new CSSUnitValue(value, unit)
```

### Parameter

- `value`
  - : Eine Zahl, die die Anzahl der Einheiten angibt.
- `unit`
  - : Ein String, der den Einheitentyp angibt.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine Methode zum Erstellen eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen `CSSUnitValue`-Konstruktoren.

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
