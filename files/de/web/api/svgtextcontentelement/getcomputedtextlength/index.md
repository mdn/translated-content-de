---
title: "SVGTextContentElement: getComputedTextLength() Methode"
short-title: getComputedTextLength()
slug: Web/API/SVGTextContentElement/getComputedTextLength
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `getComputedTextLength()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert die berechnete Länge des Textes innerhalb des Elements.

## Syntax

```js-nolint
getComputedTextLength()
```

### Parameter

Keine.

### Rückgabewert

Ein Float.

## Beispiele

### Berechnen der Textlänge

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
