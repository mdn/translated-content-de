---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSScale()`** Konstruktor erstellt ein neues [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekt, das die Werte {{cssxref("transform-function/scale", "scale()")}} und {{cssxref("transform-function/scale3d", "scale3d()")}} der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSScale/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts.
    Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` eingewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`y`](/de/docs/Web/API/CSSScale/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts.
    Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` eingewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
- [`z`](/de/docs/Web/API/CSSScale/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSScale`](/de/docs/Web/API/CSSScale)-Objekts.
    Dies muss entweder eine Zahl sein (die in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) von `unit: "number"` eingewickelt wird) oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue). Wenn ein Wert übergeben wird, wird der Wert von `is2D` auf false gesetzt.

## Beispiele

Zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
