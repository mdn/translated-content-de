---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSRotate()`** Konstruktor erstellt ein neues [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekt, das den {{cssxref("transform-function/rotate", "rotate()")}}-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSRotate/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingeschlossen ist) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingeschlossen ist) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingeschlossen ist) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Winkel des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/Reference/Values/angle)-Wert ist oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [\<number>](/de/docs/Web/CSS/Reference/Values/number)-Werte sind.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
