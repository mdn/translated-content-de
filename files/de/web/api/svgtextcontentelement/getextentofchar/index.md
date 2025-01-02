---
title: "SVGTextContentElement: getExtentOfChar() Methode"
short-title: getExtentOfChar()
slug: Web/API/SVGTextContentElement/getExtentOfChar
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die `getExtentOfChar()`-Methode der Schnittstelle [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement) stellt die berechnete enge Begrenzungsbox der Glyphenzelle dar, die einem bestimmten typografischen Zeichen entspricht.

## Syntax

```js-nolint
SVGTextContentElement.getExtentOfChar(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Zeichens.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt; die enge Begrenzungsbox des angegebenen Zeichens.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn an der Stelle `index` kein Zeichen gefunden wird.

## Beispiele

### Abrufen des Ausmaßes eines Zeichens

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the extent (bounding box) of the character at index 0 (the first character)
const extent = textElement.getExtentOfChar(0);

// The bounding box of the first character
console.dir(extent); // Output: DOMRect { x: 10, y: 38, width: 11.55, height: 16 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
