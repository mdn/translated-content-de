---
title: "DOMMatrix: scale3dSelf() Methode"
short-title: scale3dSelf()
slug: Web/API/DOMMatrix/scale3dSelf
l10n:
  sourceCommit: ac65082ad3d0885ea5fc5f8f00327d4131b6d6f4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale3dSelf()`**-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert, indem ein bestimmter Skalierungsfaktor auf alle drei Achsen angewendet wird, zentriert auf dem angegebenen Ursprung, mit dem Standardursprung `(0, 0, 0)`, und die 3D-skalierte Matrix zurückgibt.

Um eine Matrix in 3D zu skalieren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d), das eine neue skalierte Matrix erstellt, während die ursprüngliche unverändert bleibt.

## Syntax

```js-nolint
scale3dSelf()
scale3dSelf(scale)
scale3dSelf(scale, originX)
scale3dSelf(scale, originX, originY)
scale3dSelf(scale, originX, originY, originZ)
```

### Parameter

- `scale`
  - : Ein Multiplikator; der Skalierungswert. Wenn keine Skalierung angegeben wird, ist der Standardwert `1`. Wenn die Skalierung nicht 1 ist, wird die [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)-Eigenschaft der aktuellen Matrix auf `false` gesetzt.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.

### Rückgabewert

Gibt sich selbst zurück; eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix();
console.log(matrix.scale3dSelf(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3dSelf(3.1, 25, 25, 1.25).toString());
/* matrix3d(
    6.2, 0, 0, 0,
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) */
console.log(matrix.toString());
/* matrix3d(
    6.2, 0, 0, 0, 
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) (same as above) */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
- CSS {{cssxref("transform")}}-Eigenschaft und die {{cssxref("transform-function/scale3d", "scale3d()")}}- und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionen
- [CSS-Transforms](/de/docs/Web/CSS/Guides/Transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)-Methode
