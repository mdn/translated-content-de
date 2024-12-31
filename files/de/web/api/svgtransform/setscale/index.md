---
title: "SVGTransform: setScale()-Methode"
short-title: setScale()
slug: Web/API/SVGTransform/setScale
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die `setScale()`-Methode des [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Interfaces setzt den Transformationstyp auf `SVG_TRANSFORM_SCALE`, wobei die Parameter `sx` und `sy` die Skalierungsbeträge definieren.

## Syntax

```js-nolint
SVGTransform.setScale(sx, sy)
```

### Parameter

- `sx`
  - : Ein Float-Wert, der den Skalierungsbetrag entlang der X-Achse definiert.
- `sy`
  - : Ein Float-Wert, der den Skalierungsbetrag entlang der Y-Achse definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Skalieren eines SVG-Elements

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
