---
title: "DOMMatrixReadOnly: scale()-Methode"
short-title: scale()
slug: Web/API/DOMMatrixReadOnly/scale
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{APIRef("Geometry Interfaces")}}

Die **`scale()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix mit einer angewendeten Skalentransformation ist.

## Syntax

Die `scale()`-Methode wird entweder mit einem oder sechs Werten angegeben.

```js
DOMMatrixReadOnly.scale(scaleX);
DOMMatrixReadOnly.scale(scaleX, scaleY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY, originZ);
```

### Parameter

- `scaleX`
  - : Ein Multiplikator für den Skalenwert auf der x-Achse.
- `scaleY` {{optional_inline}}
  - : Ein Multiplikator für den Skalenwert auf der y-Achse. Wenn nicht angegeben, wird dies auf den Wert von `scaleX` gesetzt.
- `scaleZ` {{optional_inline}}
  - : Ein Multiplikator für den Skalenwert auf der z-Achse. Wenn dieser Wert ungleich 1 ist, wird die resultierende Matrix 3D sein.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, wird dies auf 0 gesetzt.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, wird dies auf 0 gesetzt.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, wird dies auf 0 gesetzt. Ist dieser Wert ungleich 0, wird die resultierende Matrix 3D sein.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, das Ergebnis der Skalierung der x- und y-Dimensionen der Matrix um den gegebenen Faktor, zentriert auf dem angegebenen Ursprung. Die ursprüngliche Matrix wird nicht verändert.

Wenn eine Skalierung um die z-Achse angewandt wird, ist die resultierende Matrix eine 4✕4 3D-Matrix.

## Beispiele

Dieses SVG enthält drei Quadrate, eines rot, eines blau und eines grün, die jeweils am Ursprung des Dokuments positioniert sind:

```html
<svg width="250" height="250" viewBox="0 0 25 25">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
  <rect id="transformedOrigin" width="25" height="25" fill="green" />
</svg>
```

Dieses JavaScript erstellt zunächst eine Identitätsmatrix und verwendet dann die `scale()`-Methode, um eine neue Matrix mit einem einzelnen Parameter zu erstellen.

Wir prüfen, ob der Browser eine sechsstufige `scale()`-Methode unterstützt, indem wir eine neue Matrix mit drei Parametern erstellen und die `is2D`-Eigenschaft beobachten. Wenn diese `false` ist, wurde der dritte Parameter vom Browser als `scaleZ`-Parameter akzeptiert, was diese Matrix zu einer 3D-Matrix macht.

Wir erstellen dann eine neue Matrix, die um einen bestimmten Ursprung skaliert ist, wobei entweder drei oder sechs Parameter verwendet werden, abhängig von der Unterstützung des Browsers.

Diese neuen Matrizen werden dann auf die blauen und grünen Quadrate als `transform` angewendet, wodurch sich deren Dimensionen und Positionen ändern. Das rote Quadrat bleibt unverändert.

```js
const matrix = new DOMMatrixReadOnly();
const scaledMatrix = matrix.scale(0.5);

let scaledMatrixWithOrigin = matrix.scale(0.5, 25, 25);

// if the browser has interpreted these parameters as scaleX, scaleY, scaleZ, the resulting matrix is 3D
const browserExpectsSixParamScale = !scaledMatrixWithOrigin.is2D;
if (browserExpectsSixParamScale) {
  scaledMatrixWithOrigin = matrix.scale(0.5, 0.5, 1, 25, 25, 0);
}

document
  .querySelector("#transformed")
  .setAttribute("transform", scaledMatrix.toString());
document
  .querySelector("#transformedOrigin")
  .setAttribute("transform", scaledMatrixWithOrigin.toString());
```

{{EmbedLiveSample('Examples', '250', '250')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
