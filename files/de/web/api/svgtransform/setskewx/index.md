---
title: "SVGTransform: setSkewX() Methode"
short-title: setSkewX()
slug: Web/API/SVGTransform/setSkewX
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die Methode `setSkewX()` des [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Interfaces setzt den Transformations-Typ auf `SVG_TRANSFORM_SKEWX`, wobei der Parameter `angle` die Scherung entlang der X-Achse definiert.

## Syntax

```js-nolint
setSkewX(angle)
```

### Parameter

- `angle`
  - : Ein Float, der die Menge der Scherung in Grad definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Scherung eines SVG-Elements entlang der X-Achse

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
