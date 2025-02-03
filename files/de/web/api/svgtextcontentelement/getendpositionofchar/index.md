---
title: "SVGTextContentElement: getEndPositionOfChar()-Methode"
short-title: getEndPositionOfChar()
slug: Web/API/SVGTextContentElement/getEndPositionOfChar
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `getEndPositionOfChar()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle gibt die Endposition eines typografischen Zeichens zurück, nachdem das Textlayout durchgeführt wurde.

## Syntax

```js-nolint
getEndPositionOfChar(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Zeichens.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt; die Position des Zeichens in Benutzerkoordinaten.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Zeichen an `index` gefunden wird.

## Beispiele

### Die Endposition eines Zeichens ermitteln

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the end position of the character at index 0 (the first character)
const position = textElement.getEndPositionOfChar(0);

// Get the x and y coordinates of the first character
console.log(position.x, position.y); // Output: 21.5 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
