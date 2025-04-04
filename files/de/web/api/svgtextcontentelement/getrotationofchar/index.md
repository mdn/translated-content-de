---
title: "SVGTextContentElement: getRotationOfChar()-Methode"
short-title: getRotationOfChar()
slug: Web/API/SVGTextContentElement/getRotationOfChar
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `getRotationOfChar()`-Methode der Schnittstelle [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement) repräsentiert die Rotation eines typografischen Zeichens.

## Syntax

```js-nolint
getRotationOfChar(index)
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

### Abfragen der Rotation eines Zeichens

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
