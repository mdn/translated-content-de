---
title: "DOMMatrix: translateSelf() Methode"
short-title: translateSelf()
slug: Web/API/DOMMatrix/translateSelf
l10n:
  sourceCommit: 5a4bb8ee0052bc6b0bc768e9d8b33ad9d4d9b359
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `translateSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert. Sie wendet die angegebenen Vektoren an und gibt die aktualisierte Matrix zurück. Der Standardvektor ist `[0, 0, 0]`.

Um eine Matrix zu verschieben, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)

## Syntax

```js-nolint
DOMMatrix.translateSelf(translateX, translateY)
DOMMatrix.translateSelf(translateX, translateY, translateZ)
```

### Parameter

- `translateX`
  - : Eine Zahl, die die Abszisse (x-Koordinate) des Verschiebungsvektors darstellt.
- `translateY`
  - : Eine Zahl, die die Ordinate (y-Koordinate) des Verschiebungsvektors darstellt.
- `translateZ` {{optional_inline}}
  - : Eine Zahl, die die z-Komponente des Verschiebungsvektors darstellt. Falls nicht angegeben,
    ist der Standardwert 0. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix
    3D sein.

### Rückgabewert

Gibt sich selbst zurück; die von dem angegebenen Vektor verschobene [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.translateSelf(25, 25); // mutate it
console.log(matrix); // output: "matrix(1, 0, 0, 1, 25, 25)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
- CSS {{cssxref("transform")}} Eigenschaft
- CSS {{cssxref("translate")}} Eigenschaft
- CSS {{cssxref("transform-function")}} Funktionen
  - {{cssxref("transform-function/translate", "translate()")}}
  - {{cssxref("transform-function/translate3d", "translate3d()")}}
  - {{cssxref("transform-function/translateX", "translateX()")}}
  - {{cssxref("transform-function/translateY", "translateY()")}}
  - {{cssxref("transform-function/translateZ", "translateZ()")}}
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstellenmethoden
  - [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
