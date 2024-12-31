---
title: "SVGTransform: setTranslate() Methode"
short-title: setTranslate()
slug: Web/API/SVGTransform/setTranslate
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die `setTranslate()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_TRANSLATE`, mit den Parametern `tx` und `ty`, die die Verschiebungswerte definieren.

## Syntax

```js-nolint
SVGTransform.setTranslate(tx, ty)
```

### Parameter

- `tx`
  - : Ein Float, der die Verschiebungsmenge entlang der X-Achse definiert.
- `ty`
  - : Ein Float, der die Verschiebungsmenge entlang der Y-Achse definiert.

### Rückgabewert

Keine ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Einstellen von Verschiebungswerten

```js
// Select an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Set the translation values for the transform
transform.setTranslate(100, 50);

// Output the translation details
console.log(`X Translation:  ${transform.matrix.e}`); // Output: 100
console.log(`Y Translation: ${transform.matrix.f}`); // Output: 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
