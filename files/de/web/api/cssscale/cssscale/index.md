---
title: "CSSScale: CSSScale() Konstruktor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Der **`CSSScale()`** Konstruktor erstellt ein neues
{{domxref("CSSScale")}} Objekt, das die [scale()](/de/docs/Web/CSS/transform-function/scale) und [scale3d()](/de/docs/Web/CSS/transform-function/scale3d) Werte der individuellen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameter

- {{domxref('CSSScale.x','x')}}
  - : Ein Wert für die x-Achse des zu konstruierenden {{domxref('CSSScale')}} Objekts. Dies
    muss entweder ein doppelter Integer oder ein {{domxref('CSSNumericValue')}} sein.
- {{domxref('CSSScale.y','y')}}
  - : Ein Wert für die y-Achse des zu konstruierenden {{domxref('CSSScale')}} Objekts. Dies
    muss entweder ein doppelter Integer oder ein {{domxref('CSSNumericValue')}} sein.
- {{domxref('CSSScale.z','z')}} {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden {{domxref('CSSScale')}} Objekts. Dies
    muss entweder ein doppelter Integer oder ein {{domxref('CSSNumericValue')}} sein. Wenn ein Wert für die `z-Achse` übergeben wird, handelt es sich um eine 3D-Transformation. Der Wert von
    `is2D` wird auf false gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
