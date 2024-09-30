---
title: "CSSUnitValue: CSSUnitValue() Konstruktor"
short-title: CSSUnitValue()
slug: Web/API/CSSUnitValue/CSSUnitValue
l10n:
  sourceCommit: d2d75f6b07bc4900fb0778eb37c3823c7f64eb7b
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSUnitValue()`** Konstruktor erstellt ein neues [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Objekt, das einen neuen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) darstellt. Dieses Objekt repräsentiert Werte, die einen einzelnen Einheitentyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` repräsentiert werden.

## Syntax

```js-nolint
new CSSUnitValue(value, unit)
```

### Parameter

- `value`
  - : Eine Zahl, die die Anzahl der Einheiten angibt.
- `unit`
  - : Ein String, der den Einheitstyp angibt.

## Beispiele

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
