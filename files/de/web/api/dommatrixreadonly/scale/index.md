---
title: "DOMMatrixReadOnly: scale() Methode"
short-title: scale()
slug: Web/API/DOMMatrixReadOnly/scale
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erzeugt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, auf die eine Skalentransformation angewendet wurde.

## Syntax

Die `scale()`-Methode kann entweder mit einem oder sechs Werten angegeben werden.

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
  - : Ein Multiplikator für den Skalenwert auf der y-Achse. Wenn nicht angegeben, wird standardmäßig der Wert von `scaleX` verwendet.
- `scaleZ` {{optional_inline}}
  - : Ein Multiplikator für den Skalenwert auf der z-Achse. Wenn dieser Wert ungleich 1 ist, wird die resultierende Matrix 3D sein.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, wird standardmäßig 0 verwendet.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, wird standardmäßig 0 verwendet.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, wird standardmäßig 0 verwendet. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix 3D sein.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, die das Ergebnis der Skalierung der x- und y-Dimensionen der Matrix um den angegebenen Faktor ist, zentriert auf den angegebenen Ursprung. Die ursprüngliche Matrix wird nicht modifiziert.

Wenn eine Skalierung um die z-Achse angewendet wird, ist die resultierende Matrix eine 4✕4 3D-Matrix.

## Beispiele

Dieses SVG enthält drei Quadrate, eins rot, eins blau und eins grün, alle an der Herkunft des Dokuments positioniert:

```html
<svg width="250" height="250" viewBox="0 0 25 25">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
  <rect id="transformedOrigin" width="25" height="25" fill="green" />
</svg>
```

Dieses JavaScript erstellt zunächst eine Identitätsmatrix und verwendet dann die `scale()`-Methode, um eine neue Matrix mit einem einzigen Parameter zu erstellen.

Wir testen, ob der Browser eine `scale()`-Methode mit sechs Parametern unterstützt, indem wir eine neue Matrix mit drei Parametern erstellen und ihre `is2D`-Eigenschaft beobachten. Wenn diese `false` ist, dann wurde der dritte Parameter vom Browser als `scaleZ`-Parameter akzeptiert, was diese zu einer 3D-Matrix macht.

Wir erstellen dann eine neue Matrix, die um einen gegebenen Ursprung skaliert wird, wobei je nach Browserunterstützung entweder drei oder sechs Parameter verwendet werden.

Diese neuen Matrizen werden dann auf die blauen und grünen Quadrate als `transform` angewendet und ändern deren Dimensionen und Position. Das rote Quadrat bleibt unverändert.

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
