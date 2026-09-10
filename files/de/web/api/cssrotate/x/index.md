---
title: "CSSRotate: Eigenschaft x"
short-title: x
slug: Web/API/CSSRotate/x
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Eigenschaft **`x`** des Interfaces [`CSSRotate`](/de/docs/Web/API/CSSRotate) repräsentiert die x-Koordinate des Vektors, der die Drehachse bezeichnet.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Zahlenwert festgelegt wird, wird dieser in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingeschlossen.

## Beispiele

### Lesen und Festlegen der Drehachse

```js
const rotate = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate.x.value); // 1

rotate.x = 0;
console.log(rotate.x); // CSSUnitValue {value: 0, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSRotate()`](/de/docs/Web/API/CSSRotate/CSSRotate)
- [`CSSRotate.y`](/de/docs/Web/API/CSSRotate/y)
- [`CSSRotate.z`](/de/docs/Web/API/CSSRotate/z)
- [`CSSRotate.angle`](/de/docs/Web/API/CSSRotate/angle)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
