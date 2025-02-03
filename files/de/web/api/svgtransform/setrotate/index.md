---
title: "SVGTransform: setRotate()-Methode"
short-title: setRotate()
slug: Web/API/SVGTransform/setRotate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `setRotate()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_ROTATE`, wobei der Parameter `angle` den Rotationswinkel definiert und die Parameter `cx` und `cy` das optionale Rotationszentrum definieren.

## Syntax

```js-nolint
setRotate(angle, cx, cy)
```

### Parameter

- `angle`
  - : Ein float, der den Rotationswinkel in Grad definiert.
- `cx` {{optional_inline}}
  - : Ein float, der die X-Koordinate des Rotationszentrums definiert. Standardwert ist `0`.
- `cy` {{optional_inline}}
  - : Ein float, der die Y-Koordinate des Rotationszentrums definiert. Standardwert ist `0`.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Rotieren eines SVG-Elements

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set a rotation of 45 degrees
transform.setRotate(45, 0, 0);

// Output the rotation angle
console.log(`Rotation Angle: ${transform.angle}`); // Output: 45
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform.angle`](/de/docs/Web/API/SVGTransform/angle)
