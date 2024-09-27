---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Der **`CSSScale()`** Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekt, das die [scale()](/de/docs/Web/CSS/transform-function/scale) und [scale3d()](/de/docs/Web/CSS/transform-function/scale3d) Werte der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dies muss entweder ein Gleitkomma-Integer oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dies muss entweder ein Gleitkomma-Integer oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dies muss entweder ein Gleitkomma-Integer oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein. Wenn ein Wert für die `z-Achse` übergeben wird, handelt es sich um eine 3d-Transformation. Der Wert von `is2D` wird auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
