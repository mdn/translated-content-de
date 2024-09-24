---
title: "CSSUnitValue: CSSUnitValue() Konstruktor"
short-title: CSSUnitValue()
slug: Web/API/CSSUnitValue/CSSUnitValue
l10n:
  sourceCommit: d2d75f6b07bc4900fb0778eb37c3823c7f64eb7b
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSUnitValue()`** Konstruktor erstellt ein neues {{domxref("CSSUnitValue")}} Objekt, das ein neues {{domxref('CSSUnitValue')}} Objekt zurückgibt, welches Werte darstellt, die einen einzelnen Einheitstyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` dargestellt werden.

## Syntax

```js-nolint
new CSSUnitValue(value, unit)
```

### Parameter

- `value`
  - : Ein Double, das die Anzahl der Einheiten angibt.
- `unit`
  - : Ein String, der den Typ der Einheit angibt.

## Beispiele

Das folgende Beispiel zeigt eine Methode, um einen {{domxref('CSSPositionValue')}} aus einzelnen `CSSUnitValue` Konstruktoren zu erstellen.

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

- {{domxref('CSSUnitValue.unit')}}
- {{domxref('CSSUnitValue.value')}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
