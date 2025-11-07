---
title: "DOMMatrix: translateSelf()-Methode"
short-title: translateSelf()
slug: Web/API/DOMMatrix/translateSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `translateSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert. Sie wendet die angegebenen Vektoren an und gibt die aktualisierte Matrix zurück. Der Standardvektor ist `[0, 0, 0]`.

Um eine Matrix ohne Veränderung zu übersetzen, siehe [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate).

## Syntax

```js-nolint
translateSelf(translateX, translateY)
translateSelf(translateX, translateY, translateZ)
```

### Parameter

- `translateX`
  - : Eine Zahl, die die Abszisse (x-Koordinate) des Übersetzungsvektors darstellt.
- `translateY`
  - : Eine Zahl, die die Ordinate (y-Koordinate) des Übersetzungsvektors darstellt.
- `translateZ` {{optional_inline}}
  - : Eine Zahl, die die z-Komponente des Übersetzungsvektors darstellt. Wenn nicht angegeben,
    ist der Standardwert 0. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix
    3D sein.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die durch den angegebenen
Vektor übersetzt wurde.

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
- [CSS-Transformen](/de/docs/Web/CSS/Guides/Transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstellenmethoden
  - [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
