---
title: "SVGTransform: setSkewX()-Methode"
short-title: setSkewX()
slug: Web/API/SVGTransform/setSkewX
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die `setSkewX()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWX`, wobei der Parameter `angle` den Grad der Schiefe entlang der X-Achse definiert.

## Syntax

```js-nolint
SVGTransform.setSkewX(angle)
```

### Parameter

- `angle`
  - : Ein Float-Wert, der den Grad der Schiefe in Grad definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Schiefe eines SVG-Elements entlang der X-Achse

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Apply a skew of 30 degrees along the X-axis
transform.setSkewX(30);

// Log the applied transformation angle
console.log(`Skew Angle: ${transform.angle}`); // Output: 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform.angle`](/de/docs/Web/API/SVGTransform/angle)
