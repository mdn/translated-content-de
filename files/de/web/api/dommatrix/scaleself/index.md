---
title: "DOMMatrix: scaleSelf() Methode"
short-title: scaleSelf()
slug: Web/API/DOMMatrix/scaleSelf
l10n:
  sourceCommit: 96907ad4c1c04a5830051651c41fe93f8656a30f
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scaleSelf()`** Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderbare Transformationsmethode, die eine Matrix durch Anwenden eines angegebenen Skalierungsfaktors modifiziert, zentriert auf den gegebenen Ursprung, mit einem Standardursprung von `(0, 0)`, und die skalierte Matrix zurückgibt.

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
  - : Ein Multiplikator für den Skalierungswert auf der x-Achse. Falls nicht angegeben, wird standardmäßig `1` verwendet.
- `scaleY` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der y-Achse. Falls nicht angegeben, wird standardmäßig der Wert von `scaleX` verwendet.
- `scaleZ` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der z-Achse. Wenn dieser Wert nicht `1` ist, wird die resultierende Matrix 3D sein.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Falls kein Ursprung angegeben ist, wird standardmäßig `0` verwendet.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Falls kein Ursprung angegeben ist, wird standardmäßig `0` verwendet.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Falls kein Ursprung angegeben ist, wird standardmäßig `0` verwendet. Wenn dieser Wert nicht `0` ist, wird die resultierende Matrix 3D sein.

### Rückgabewert

Gibt sich selbst zurück; eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

Wenn eine Skalierung um die z-Achse angewendet wird, ist die Matrix eine 4✕4 3D-Matrix.

## Beispiele

Dieses SVG enthält zwei halbtransparente Quadrate, eines rot und eines blau, die jeweils am Dokumentursprung positioniert sind:

```html
<svg viewBox="0 0 50 50" height="200">
  <rect width="25" height="25" fill="#f009" />
  <rect id="transformed" width="25" height="25" fill="#00f9" />
</svg>
```

Dieses JavaScript erstellt zuerst eine Matrix und skaliert dann die Matrix so, dass die Breite halbiert und die Höhe verdoppelt wird, unter Verwendung der `scaleSelf()`-Methode.

Die Matrix wird dann auf das blaue Quadrat als `transform` angewendet, wodurch sich die Abmessungen und die Position ändern. Das rote Quadrat bleibt unverändert.

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
- [CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface-`transform()`-Methode
