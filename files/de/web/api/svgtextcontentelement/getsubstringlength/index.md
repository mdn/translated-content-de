---
title: "SVGTextContentElement: getSubStringLength()-Methode"
short-title: getSubStringLength()
slug: Web/API/SVGTextContentElement/getSubStringLength
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("SVG")}}

Die `getSubStringLength()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert die berechnete Länge der formatierten Textvorschubdistanz für einen Textsubstring innerhalb des Elements.

Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Substring und jeden zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften [`letter-spacing`](/de/docs/Web/CSS/Reference/Properties/letter-spacing) und [`word-spacing`](/de/docs/Web/CSS/Reference/Properties/word-spacing) eingefügt wird. Visuelle Anpassungen des Abstands durch das [`x`](/de/docs/Web/CSS/Reference/Properties/x)-Attribut werden ignoriert.

## Syntax

```js-nolint
getSubStringLength(index, length)
```

### Parameter

- `index`
  - : Ein `integer`; der Startindex des Substrings.
- `length`
  - : Ein `integer`; die Anzahl der Zeichen, die im Substring enthalten sein sollen.

### Rückgabewert

Ein float.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `index` größer ist als der höchste Index oder `length` negativ ist.

## Beispiele

### Länge eines Substrings ermitteln

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
