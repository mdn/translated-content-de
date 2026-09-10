---
title: "CSSRotate: y-Eigenschaft"
short-title: y
slug: Web/API/CSSRotate/y
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`y`**-Eigenschaft des [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Interfaces repräsentiert die y-Koordinate des Vektors, der die Rotationsachse bezeichnet.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn sie auf eine Zahl gesetzt wird, wird diese in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingeschlossen.

## Beispiele

### Lesen und Festlegen der Rotationsachse

```js
const rotate = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate.y.value); // 1

rotate.y = 0;
console.log(rotate.y); // CSSUnitValue {value: 0, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSRotate()`](/de/docs/Web/API/CSSRotate/CSSRotate)
- [`CSSRotate.x`](/de/docs/Web/API/CSSRotate/x)
- [`CSSRotate.z`](/de/docs/Web/API/CSSRotate/z)
- [`CSSRotate.angle`](/de/docs/Web/API/CSSRotate/angle)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
