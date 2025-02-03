---
title: "DOMMatrix: scale3dSelf()-Methode"
short-title: scale3dSelf()
slug: Web/API/DOMMatrix/scale3dSelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale3dSelf()`**-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderbare Transformationsmethode, die eine Matrix durch Anwendung eines angegebenen Skalierungsfaktors auf alle drei Achsen modifiziert. Die Skalierung erfolgt zentriert auf dem angegebenen Ursprung, wobei der Standardursprung auf `(0, 0, 0)` gesetzt ist. Es wird die 3D-geskalierte Matrix zurückgegeben.

Um eine Matrix 3D zu skalieren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d), welche eine neue skalierte Matrix erstellt, während das Original unverändert bleibt.

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
  - : Ein Multiplikator; der Skalierungswert. Wenn kein Skalierungswert angegeben wird, ist der Standardwert `1`. Ist der Skalierungswert ungleich 1, wird die [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)-Eigenschaft der aktuellen Matrix auf `false` gesetzt.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wird kein Ursprung angegeben, ist der Standardwert `0`.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wird kein Ursprung angegeben, ist der Standardwert `0`.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wird kein Ursprung angegeben, ist der Standardwert `0`.

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
- CSS {{cssxref("transform")}}-Eigenschaft und die {{cssxref("transform-function/scale", "scale3d()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)-Methode
