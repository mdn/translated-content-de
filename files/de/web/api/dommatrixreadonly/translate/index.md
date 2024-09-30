---
title: "DOMMatrixReadOnly: translate()-Methode"
short-title: translate()
slug: Web/API/DOMMatrixReadOnly/translate
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{APIRef("Geometry Interfaces")}}

Die `translate()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix mit einer angewendeten Translation ist.

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
  - : Eine Zahl, die die z-Komponente des Translationsvektors darstellt. Wenn nicht angegeben, ist der Standardwert 0. Wenn der Wert ungleich 0 ist, wird die resultierende Matrix dreidimensional.

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, die das Ergebnis der Matrix ist, die durch den angegebenen Vektor übersetzt wurde. Die ursprüngliche Matrix wird nicht geändert.

Wenn eine Translation entlang der z-Achse angewendet wird, wird die resultierende Matrix eine 4x4 3D-Matrix sein.

## Beispiele

Dieses SVG enthält zwei Quadrate, eines rot und eines blau, die beide am Ursprung des Dokuments positioniert sind:

```html
<svg width="250" height="250" viewBox="0 0 50 50">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
</svg>
```

Der folgende JavaScript-Code erzeugt zuerst eine Identitätsmatrix und verwendet dann die `translate()`-Methode, um eine neue, übersetzte Matrix zu erstellen, die dann auf das blaue Quadrat als `transform` angewendet wird. Das rote Quadrat bleibt unverändert an seiner Position.

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
