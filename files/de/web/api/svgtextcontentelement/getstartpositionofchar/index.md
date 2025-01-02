---
title: "SVGTextContentElement: getStartPositionOfChar() Methode"
short-title: getStartPositionOfChar()
slug: Web/API/SVGTextContentElement/getStartPositionOfChar
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die Methode `getStartPositionOfChar()` des [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement) Interfaces gibt die Position eines typografischen Zeichens nach der Textlayout-Verarbeitung zurück.

## Syntax

```js-nolint
SVGTextContentElement.getStartPositionOfChar(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Zeichens.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt; die Position des Zeichens in Benutzerkoordinaten.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Zeichen an `index` gefunden wird.

## Beispiele

### Die Position eines Zeichens ermitteln

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the position of the character at index 0 (the first character)
const position = textElement.getStartPositionOfChar(0);

// Get the x and y coordinates of the first character
console.log(position.x, position.y); // Output: 10 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
