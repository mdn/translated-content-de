---
title: "SVGTextContentElement: getCharNumAtPosition() Methode"
short-title: getCharNumAtPosition()
slug: Web/API/SVGTextContentElement/getCharNumAtPosition
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("SVG")}}

Die `getCharNumAtPosition()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert das Zeichen, das dazu führte, dass ein Text-Glyph an einer bestimmten Position im Koordinatensystem gerendert wurde. Da die Beziehung zwischen Zeichen und Glyphen nicht eins-zu-eins ist, wird nur das erste Zeichen des entsprechenden typografischen Zeichens zurückgegeben.

Wenn an der angegebenen Position kein Zeichen gefunden wird, wird `-1` zurückgegeben.

## Syntax

```js-nolint
getCharNumAtPosition(point)
```

### Parameter

- `point`
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt; die Koordinaten (x, y), an denen die Position des Zeichens im Benutzerkoordinatenraum überprüft werden soll.

### Rückgabewert

Ein Long; der Index des Zeichens, das der Position entspricht.

## Beispiele

### Finden des Zeichens an einer bestimmten Position

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Create a DOMPoint for the position (30, 40)
const point = new DOMPoint(30, 40);

// Get the character at the specified position
const charIndex = textElement.getCharNumAtPosition(point);

console.log(charIndex); // Output: 2 (for character "l")

// Check with a point where no character is present
const offPoint = new DOMPoint(300, 40);
const offCharIndex = textElement.getCharNumAtPosition(offPoint);

console.log(offCharIndex); // Output: -1 (no character found)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
