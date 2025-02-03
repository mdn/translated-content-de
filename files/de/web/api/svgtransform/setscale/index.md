---
title: "SVGTransform: setScale()-Methode"
short-title: setScale()
slug: Web/API/SVGTransform/setScale
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `setScale()`-Methode des [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Interfaces setzt den Transformationstyp auf `SVG_TRANSFORM_SCALE`. Die Parameter `sx` und `sy` definieren die Skalierungsfaktoren.

## Syntax

```js-nolint
setScale(sx, sy)
```

### Parameter

- `sx`
  - : Ein Float, der den Skalierungsfaktor entlang der X-Achse definiert.
- `sy`
  - : Ein Float, der den Skalierungsfaktor entlang der Y-Achse definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Skalierung eines SVG-Elements

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set the scale values for the transform
transform.setScale(2, 3);

// Output the scale details
console.log(`Scale X: ${transform.matrix.a}`); // Output: 2
console.log(`Scale Y: ${transform.matrix.d}`); // Output: 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
