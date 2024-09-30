---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
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
  - : Ein Wert für die x-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder ein ganzzahliger Wert oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`y`](/de/docs/Web/API/CSSRotate/y)
  - : Ein Wert für die y-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder ein ganzzahliger Wert oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`z`](/de/docs/Web/API/CSSRotate/z)
  - : Ein Wert für die z-Achse des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder ein ganzzahliger Wert oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Winkel des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts. Dies
    muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/angle) Wert ist
    oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z`
    keine [\<number>](/de/docs/Web/CSS/number) Werte sind.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
