---
title: "CSSUnitValue: unit-Eigenschaft"
short-title: unit
slug: Web/API/CSSUnitValue/unit
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue.unit`** schreibgeschützte Eigenschaft
der Schnittstelle [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) gibt einen String zurück,
der den Einheitstyp angibt.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen
`CSSUnitValue`-Konstruktoren und ruft dann die
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
- [Dimensionen in CSS-Einheiten und -Werten](/de/docs/Web/CSS/CSS_Values_and_Units#dimensions)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
