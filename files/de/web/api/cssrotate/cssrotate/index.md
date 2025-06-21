---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: e1f6592bf96c5614a81ccb5dbd65e301b734b0e7
---

{{APIRef("CSS Typed OM")}}

Der **`CSSRotate()`** Konstruktor erstellt ein neues
[`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekt, das den [rotate()](/de/docs/Web/CSS/transform-function/rotate) Wert der einzelnen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSRotate/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts. Dieser muss entweder eine Zahl (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts. Dieser muss entweder eine Zahl (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts. Dieser muss entweder eine Zahl (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Winkel des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts. Dieser muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/angle) Wert ist oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [\<number>](/de/docs/Web/CSS/number) Werte sind.

## Beispiele

Auszufüllen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
