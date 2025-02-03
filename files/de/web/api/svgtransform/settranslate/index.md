---
title: "SVGTransform: setTranslate() Methode"
short-title: setTranslate()
slug: Web/API/SVGTransform/setTranslate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `setTranslate()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_TRANSLATE`, wobei die Parameter `tx` und `ty` die Übersetzungsbeträge definieren.

## Syntax

```js-nolint
setTranslate(tx, ty)
```

### Parameter

- `tx`
  - : Ein Float, der die Übersetzungsmenge entlang der X-Achse definiert.
- `ty`
  - : Ein Float, der die Übersetzungsmenge entlang der Y-Achse definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Setzen von Übersetzungswerten

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
