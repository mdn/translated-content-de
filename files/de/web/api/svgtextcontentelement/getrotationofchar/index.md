---
title: "SVGTextContentElement: getRotationOfChar()-Methode"
short-title: getRotationOfChar()
slug: Web/API/SVGTextContentElement/getRotationOfChar
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die `getRotationOfChar()`-Methode der [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)-Schnittstelle repräsentiert die Rotation eines typografischen Zeichens.

## Syntax

```js-nolint
SVGTextContentElement.getRotationOfChar(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Zeichens.

### Rückgabewert

Ein Float; der Rotationswinkel des Zeichens in Grad.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Zeichen an `index` gefunden wird.

## Beispiele

### Ermitteln der Rotation eines Zeichens

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" writing-mode="vertical-rl">
    Hello, SVG
  </text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the rotation of the first character "H"
const rotation = textElement.getRotationOfChar(0);

console.log(extent); // Output: 90
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`writing-mode`](/de/docs/Web/CSS/writing-mode)
