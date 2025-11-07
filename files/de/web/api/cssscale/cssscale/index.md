---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSS Typed OM")}}

Der **`CSSScale()`** Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekt, das die [scale()](/de/docs/Web/CSS/Reference/Values/transform-function/scale) und [scale3d()](/de/docs/Web/CSS/Reference/Values/transform-function/scale3d)-Werte der einzelnen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` verpackt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` verpackt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` verpackt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Wert übergeben wird, wird der Wert von `is2D` auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
