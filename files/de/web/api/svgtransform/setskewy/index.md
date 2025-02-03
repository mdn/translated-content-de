---
title: "SVGTransform: setSkewY()-Methode"
short-title: setSkewY()
slug: Web/API/SVGTransform/setSkewY
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `setSkewY()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_SKEWY`, wobei der Parameter `angle` die Menge der Schrägstellung entlang der Y-Achse definiert.

## Syntax

```js-nolint
setSkewY(angle)
```

### Parameter

- `angle`
  - : Ein Float, der die Menge der Schrägstellung in Grad definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Schrägstellung eines SVG-Elements entlang der Y-Achse

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Apply a skew of 30 degrees along the Y-axis
transform.setSkewY(30);

// Log the applied transformation angle
console.log(`Skew Angle: ${transform.angle}`); // Output: 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform.angle`](/de/docs/Web/API/SVGTransform/angle)
