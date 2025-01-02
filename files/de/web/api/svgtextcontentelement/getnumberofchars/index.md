---
title: "SVGTextContentElement: getNumberOfChars()-Methode"
short-title: getNumberOfChars()
slug: Web/API/SVGTextContentElement/getNumberOfChars
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die `getNumberOfChars()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle gibt die Gesamtanzahl der adressierbaren Zeichen an, die innerhalb des aktuellen Elements zur Verfügung stehen, unabhängig davon, ob sie gerendert werden.

## Syntax

```js-nolint
SVGTextContentElement.getNumberOfChars()
```

### Parameter

Keine.

### Rückgabewert

Ein langer Wert.

## Beispiele

### Zeichen in einem Textelement zählen

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the number of characters in the text element
const charCount = textElement.getNumberOfChars();

console.log(charCount); // Output: 17
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
