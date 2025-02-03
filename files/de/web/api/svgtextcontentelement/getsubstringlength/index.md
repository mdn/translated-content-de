---
title: "SVGTextContentElement: getSubStringLength()-Methode"
short-title: getSubStringLength()
slug: Web/API/SVGTextContentElement/getSubStringLength
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `getSubStringLength()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert die berechnete Länge der formatieren Text-Vorschubstrecke für einen Textsubstring innerhalb des Elements.

Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Substring und zusätzlichen Abstand, der durch die CSS-Eigenschaften [`letter-spacing`](/de/docs/Web/CSS/letter-spacing) und [`word-spacing`](/de/docs/Web/CSS/word-spacing) eingefügt wird, berücksichtigt. Visuelle Abstandsänderungen, die durch das [`x`](/de/docs/Web/CSS/x)-Attribut vorgenommen werden, werden ignoriert.

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

Ein `float`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `index` größer als der höchste Index ist oder `length` negativ ist.

## Beispiele

### Die Länge eines Substrings ermitteln

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
