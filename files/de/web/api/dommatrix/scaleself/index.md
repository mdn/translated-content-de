---
title: "DOMMatrix: scaleSelf() Methode"
short-title: scaleSelf()
slug: Web/API/DOMMatrix/scaleSelf
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scaleSelf()`** Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Schnittstelle ist eine veränderliche Transformationsmethode, die eine Matrix durch Anwendung eines angegebenen Skalierungsfaktors modifiziert. Dies erfolgt zentriert auf einem gegebenen Ursprung, wobei der Standardursprung `(0, 0)` ist, und sie gibt die skalierten Matrix zurück.

Um eine Matrix zu skalieren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale), die eine neue skalierte Matrix erstellt, während die ursprüngliche unverändert bleibt.

## Syntax

```js-nolint
scaleSelf()
scaleSelf(scaleX)
scaleSelf(scaleX, scaleY)
scaleSelf(scaleX, scaleY, scaleZ)
scaleSelf(scaleX, scaleY, scaleZ, originX)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ)
```

### Parameter

- `scaleX` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der x-Achse. Wenn nicht angegeben, ist der Standardwert `1`.
- `scaleY` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der y-Achse. Wenn nicht angegeben, entspricht der Standardwert dem Wert von `scaleX`.
- `scaleZ` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der z-Achse. Wenn dieser Wert etwas anderes als 1 ist, wird die resultierende Matrix 3D.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, beträgt der Standardwert 0.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, beträgt der Standardwert 0.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, beträgt der Standardwert 0. Wenn dieser Wert etwas anderes als 0 ist, wird die resultierende Matrix 3D.

### Rückgabewert

Gibt sich selbst zurück; eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

Wenn eine Skalierung entlang der z-Achse angewendet wird, ist die Matrix eine 4✕4 3D-Matrix.

## Beispiele

Diese SVG enthält zwei halbtransparente Quadrate, eines rot und eines blau, die jeweils am Dokumentursprung positioniert sind:

```html
<svg viewBox="0 0 50 50" height="200">
  <rect width="25" height="25" fill="#ff000099" />
  <rect id="transformed" width="25" height="25" fill="#0000ff99" />
</svg>
```

Dieses JavaScript erstellt zuerst eine Matrix und skaliert dann die Matrix mit der `scaleSelf()` Methode so, dass die Breite halbiert und die Höhe verdoppelt wird.

Die Matrix wird dann auf das blaue Quadrat als `transform` angewendet, was seine Dimensionen und Position ändert. Das rote Quadrat bleibt unverändert.

```js
const matrix = new DOMMatrix();
matrix.scaleSelf(0.5, 2);

document
  .querySelector("#transformed")
  .setAttribute("transform", matrix.toString());
```

{{EmbedLiveSample('Examples', '', '220')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
- CSS {{cssxref("transform")}} Eigenschaft und die {{cssxref("transform-function/scale", "scaleSelf()")}} und {{cssxref("transform-function/matrix", "matrix()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) Methode
