---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: e1f6592bf96c5614a81ccb5dbd65e301b734b0e7
---

{{APIRef("CSS Typed OM")}}

Der **`CSSScale()`** Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale) Objekt, das die [scale()](/de/docs/Web/CSS/transform-function/scale) und [scale3d()](/de/docs/Web/CSS/transform-function/scale3d) Werte der individuellen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu erstellenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts. Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingebettet wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu erstellenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts. Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingebettet wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu erstellenden [`CSSScale`](/de/docs/Web/API/CSSScale) Objekts. Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` eingebettet wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Wert übergeben wird, wird der Wert von `is2D` auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
