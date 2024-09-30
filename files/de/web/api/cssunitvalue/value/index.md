---
title: "CSSUnitValue: value-Eigenschaft"
short-title: value
slug: Web/API/CSSUnitValue/value
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue.value`**-Eigenschaft des
[`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Interfaces gibt eine Zahl (double) an, die die Anzahl der Einheiten angibt.

## Wert

Ein double.

## Beispiele

Im Folgenden wird ein [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen
`CSSUnitValue`-Konstruktoren erstellt und dann die
`CSSUnitValue.value` abgefragt.

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
