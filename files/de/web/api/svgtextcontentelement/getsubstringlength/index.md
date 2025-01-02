---
title: "SVGTextContentElement: getSubStringLength()-Methode"
short-title: getSubStringLength()
slug: Web/API/SVGTextContentElement/getSubStringLength
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die `getSubStringLength()`-Methode des [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Interfaces repräsentiert die berechnete Länge des formatierten Textfortschrittsabstandes für einen Teilstring von Text innerhalb des Elements.

Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Teilstring und jeglichen zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften [`letter-spacing`](/de/docs/Web/CSS/letter-spacing) und [`word-spacing`](/de/docs/Web/CSS/word-spacing) eingefügt wird. Visuelle Abstandsänderungen, die durch das [`x`](/de/docs/Web/CSS/x)-Attribut vorgenommen werden, werden ignoriert.

## Syntax

```js-nolint
SVGTextContentElement.getSubStringLength(index, length)
```

### Parameter

- `index`
  - : Ein `integer`; der Startindex des Teilstrings.
- `length`
  - : Ein `integer`; die Anzahl der Zeichen, die im Teilstring enthalten sein sollen.

### Rückgabewert

Ein `float`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `index` größer als der höchste Index ist oder `length` negativ ist.

## Beispiele

### Die Länge eines Teilstrings ermitteln

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the length of a substring starting at character 0 with 5 characters
const substringLength = textElement.getSubStringLength(0, 5);

console.log(substringLength); // Output: 35.55
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
