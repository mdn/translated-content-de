---
title: "DOMMatrixReadOnly: scale()-Methode"
short-title: scale()
slug: Web/API/DOMMatrixReadOnly/scale
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{APIRef("Geometry Interfaces")}}

Die **`scale()`**-Methode der {{domxref("DOMMatrixReadOnly")}}-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix mit einer angewendeten Skalentransformation ist.

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
  - : Ein Multiplikator für den Skalierungswert auf der x-Achse.
- `scaleY` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der y-Achse. Wenn nicht angegeben, ist der Standardwert der Wert von `scaleX`.
- `scaleZ` {{optional_inline}}
  - : Ein Multiplikator für den Skalierungswert auf der z-Achse. Wenn dieser Wert ungleich 1 ist, wird die resultierende Matrix 3D sein.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, ist der Standardwert 0.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, ist der Standardwert 0.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, ist der Standardwert 0. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix 3D sein.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, wobei die x- und y-Dimensionen der Matrix um den angegebenen Faktor skaliert sind, zentriert auf den angegebenen Ursprung. Die ursprüngliche Matrix wird nicht geändert.

Wenn eine Skalierung über die z-Achse angewendet wird, ist die resultierende Matrix eine 4✕4 3D-Matrix.

## Beispiele

Dieses SVG enthält drei Quadrate, eines rot, eines blau und eines grün, die alle am Dokumentursprung positioniert sind:

```html
<svg width="250" height="250" viewBox="0 0 25 25">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
  <rect id="transformedOrigin" width="25" height="25" fill="green" />
</svg>
```

Dieses JavaScript erstellt zunächst eine Identitätsmatrix und verwendet dann die `scale()`-Methode, um eine neue Matrix mit einem einzigen Parameter zu erstellen.

Wir testen, ob der Browser eine sechsteilige `scale()`-Methode unterstützt, indem wir eine neue Matrix mit drei Parametern erstellen und deren `is2D`-Eigenschaft beobachten. Wenn diese `false` ist, dann wurde der dritte Parameter vom Browser als `scaleZ`-Parameter akzeptiert, was diese Matrix 3D macht.

Wir erstellen dann eine neue Matrix, die um einen gegebenen Ursprung skaliert ist, indem wir je nach Browserunterstützung entweder drei oder sechs Parameter verwenden.

Diese neuen Matrizen werden dann auf das blaue und grüne Quadrat als `Transform` angewendet, wodurch deren Dimensionen und Position geändert werden. Das rote Quadrat bleibt unverändert.

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
