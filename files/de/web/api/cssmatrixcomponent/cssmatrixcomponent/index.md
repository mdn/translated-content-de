---
title: "CSSMatrixComponent: CSSMatrixComponent() Konstruktor"
short-title: CSSMatrixComponent()
slug: Web/API/CSSMatrixComponent/CSSMatrixComponent
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMatrixComponent()`** Konstruktor erstellt ein neues [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent) Objekt, das die {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Werte der individuellen {{CSSXRef('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSMatrixComponent(matrix)
new CSSMatrixComponent(matrix, options)
```

### Parameter

- [`matrix`](/de/docs/Web/API/CSSMatrixComponent/matrix)
  - : Eine 2D- oder 3D-Matrix.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `is2D`
      - : Ein Boolean, der angibt, ob die konstruierte `CSSMatrixComponent` als 2D-Matrix behandelt werden soll. Falls weggelassen, wird dies standardmäßig auf den Wert der eigenen [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) Eigenschaft von `matrix` gesetzt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
