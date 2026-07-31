---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSScale()`** Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale) Objekt, das die {{cssxref("transform-function/scale", "scale()")}} und {{cssxref("transform-function/scale3d", "scale3d()")}} Werte der individuellen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts.
    Dies muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Wert übergeben wird, wird `is2D` auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
