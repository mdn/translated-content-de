---
title: "SVGTextContentElement: getNumberOfChars()-Methode"
short-title: getNumberOfChars()
slug: Web/API/SVGTextContentElement/getNumberOfChars
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `getNumberOfChars()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert die Gesamtanzahl der adressierbaren Zeichen, die für die Darstellung innerhalb des aktuellen Elements zur Verfügung stehen, unabhängig davon, ob sie gerendert werden.

## Syntax

```js-nolint
getNumberOfChars()
```

### Parameter

Keine.

### Rückgabewert

Ein langes Integer.

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
