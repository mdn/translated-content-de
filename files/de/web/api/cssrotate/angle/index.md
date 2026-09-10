---
title: "CSSRotate: angle-Eigenschaft"
short-title: angle
slug: Web/API/CSSRotate/angle
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`angle`**-Eigenschaft des [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Interfaces repräsentiert den Rotationswinkel.
Ein positiver Winkel kennzeichnet eine Drehung im Uhrzeigersinn, ein negativer eine Drehung gegen den Uhrzeigersinn.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

## Beispiele

### Lesen und Festlegen des Winkels

```js
const rotate = new CSSRotate(CSS.deg(45));

console.log(rotate.angle.value); // 45
console.log(rotate.angle.unit); // "deg"

rotate.angle = CSS.deg(90);
console.log(rotate.toString()); // "rotate(90deg)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSRotate()`](/de/docs/Web/API/CSSRotate/CSSRotate)
- [`CSSRotate.x`](/de/docs/Web/API/CSSRotate/x)
- [`CSSRotate.y`](/de/docs/Web/API/CSSRotate/y)
- [`CSSRotate.z`](/de/docs/Web/API/CSSRotate/z)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
