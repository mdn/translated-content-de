---
title: "DOMMatrixReadOnly: `translate()` Methode"
short-title: translate()
slug: Web/API/DOMMatrixReadOnly/translate
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `translate()` Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Schnittstellen
erzeugt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix mit einer angewandten Translation ist.

## Syntax

```js-nolint
DOMMatrix.translate(translateX, translateY)
DOMMatrix.translate(translateX, translateY, translateZ)
```

### Parameter

- `translateX`
  - : Eine Zahl, die die Abszisse (x-Koordinate) des Translationsvektors darstellt.
- `translateY`
  - : Eine Zahl, die die Ordinate (y-Koordinate) des Translationsvektors darstellt.
- `translateZ` {{optional_inline}}
  - : Eine Zahl, die die z-Komponente des Translationsvektors darstellt. Falls nicht angegeben, ist der Standardwert 0. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix 3D sein.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück,
die eine neue Matrix enthält, die das Ergebnis der Matrix ist, die um den angegebenen
Vektor übersetzt wurde. Die ursprüngliche Matrix wird nicht verändert.

Wenn eine Translation entlang der z-Achse angewendet wird, ist die resultierende Matrix eine 4x4 3D-Matrix.

## Beispiele

Diese SVG enthält zwei Quadrate, eines rot und eines blau, die jeweils am Dokumentursprung positioniert sind:

```html
<svg width="250" height="250" viewBox="0 0 50 50">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
</svg>
```

Das folgende JavaScript erstellt zuerst eine Identitätsmatrix und verwendet dann die
`translate()` Methode, um eine neue, übersetzte Matrix zu erstellen — die anschließend
auf das blaue Quadrat als `transform` angewendet wird. Das rote Quadrat bleibt unverändert.

```js
const matrix = new DOMMatrixReadOnly().translate(25, 25);

document
  .querySelector("#transformed")
  .setAttribute("transform", matrix.toString());
```

{{EmbedLiveSample('Examples', '250', '250')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
