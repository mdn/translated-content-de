---
title: "SVGTextContentElement: getEndPositionOfChar() Methode"
short-title: getEndPositionOfChar()
slug: Web/API/SVGTextContentElement/getEndPositionOfChar
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die `getEndPositionOfChar()` Methode des [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Interfaces gibt die Endposition eines typografischen Zeichens zurück, nachdem das Text-Layout durchgeführt wurde.

## Syntax

```js-nolint
SVGTextContentElement.getEndPositionOfChar(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Zeichens.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt; die Position des Zeichens in Benutzerkoordinaten.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn an der Position `index` kein Zeichen gefunden wird.

## Beispiele

### Ermitteln der Endposition eines Zeichens

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
