---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSRotate()`** Konstruktor erstellt ein neues [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekt, das den Wert der {{cssxref("transform-function/rotate", "rotate()")}} der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

Dies kann entweder als eine 2D-Rotation um einen bestimmten Winkel oder als eine 3D-Rotation um einen Winkel um eine bestimmte Achse spezifiziert werden.

## Syntax

```js-nolint
new CSSRotate(angle)
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Winkel des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`x`](/de/docs/Web/API/CSSRotate/x) {{optional_inline}}
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Nur verwendet und erforderlich bei der Konstruktion einer 3D-Rotation.
- [`y`](/de/docs/Web/API/CSSRotate/y) {{optional_inline}}
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Nur verwendet und erforderlich bei der Konstruktion einer 3D-Rotation.
- [`z`](/de/docs/Web/API/CSSRotate/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSRotate`](/de/docs/Web/API/CSSRotate) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Nur verwendet und erforderlich bei der Konstruktion einer 3D-Rotation.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wirft einen Fehler, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/Reference/Values/angle) Wert ist oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [\<number>](/de/docs/Web/CSS/Reference/Values/number) Werte sind.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
