---
title: "DOMMatrixReadOnly: translate() Methode"
short-title: translate()
slug: Web/API/DOMMatrixReadOnly/translate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `translate()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix mit einer angewendeten Translation ist.

## Syntax

```js-nolint
translate(translateX, translateY)
translate(translateX, translateY, translateZ)
```

### Parameter

- `translateX`
  - : Eine Zahl, die die Abszisse (x-Koordinate) des Translationsvektors darstellt.
- `translateY`
  - : Eine Zahl, die die Ordinate (y-Koordinate) des Translationsvektors darstellt.
- `translateZ` {{optional_inline}}
  - : Eine Zahl, die die z-Komponente des Translationsvektors darstellt. Wenn nicht angegeben,
    wird standardmäßig 0 verwendet. Wenn dieser Wert ungleich 0 ist, wird die resultierende Matrix
    dreidimensional.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, die das Ergebnis der Matrix ist, die um den angegebenen Vektor übersetzt wird. Die ursprüngliche Matrix wird nicht verändert.

Wenn eine Translation bezüglich der z-Achse angewendet wird, ist die resultierende Matrix eine 4x4 3D-Matrix.

## Beispiele

Dieses SVG enthält zwei Quadrate, eines rot und eines blau, die jeweils am Dokumentursprung positioniert sind:

```html
<svg width="250" height="250" viewBox="0 0 50 50">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
</svg>
```

Das folgende JavaScript erstellt zunächst eine Identitätsmatrix und verwendet dann die `translate()`-Methode, um eine neue, übersetzte Matrix zu erstellen — diese wird dann auf das blaue Quadrat als `transform` angewendet. Das rote Quadrat bleibt unverändert.

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
