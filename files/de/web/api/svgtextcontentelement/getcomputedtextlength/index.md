---
title: "SVGTextContentElement: Methode getComputedTextLength()"
short-title: getComputedTextLength()
slug: Web/API/SVGTextContentElement/getComputedTextLength
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die Methode `getComputedTextLength()` der Schnittstelle [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement) gibt die berechnete Länge des Textes innerhalb des Elements an.

## Syntax

```js-nolint
SVGTextContentElement.getComputedTextLength()
```

### Parameter

Keine.

### Rückgabewert

Ein Gleitkommawert (`float`).

## Beispiele

### Berechnung der Textlänge

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the computed text length
const textLength = textElement.getComputedTextLength();

console.log(textLength); // Output: 124.5 (e.g. depends on font size and text content)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
