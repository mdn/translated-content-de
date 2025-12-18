---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Der **`CSSRotate()`** Konstruktor erstellt ein neues
[`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekt, das den {{cssxref("transform-function/rotate", "rotate()")}}-Wert der
einzelnen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSRotate/x)
  - : Ein Wert für die x-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Ein Wert für die y-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Ein Wert für die z-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` umgewandelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Winkel des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts. Dieser
    muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/Reference/Values/angle)-Wert ist
    oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [\<number>](/de/docs/Web/CSS/Reference/Values/number)-Werte sind.

## Beispiele

Noch umzusetzen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
