---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Der **`CSSScale()`**-Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekt, das die Werte {{cssxref("transform-function/scale", "scale()")}} und {{cssxref("transform-function/scale3d", "scale3d()")}} der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewrappt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewrappt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts. Dieser muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"` gewrappt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Wert übergeben wird, wird der Wert von `is2D` auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
