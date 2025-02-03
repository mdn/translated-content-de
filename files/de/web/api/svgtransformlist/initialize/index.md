---
title: "SVGTransformList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGTransformList/initialize
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `initialize()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle entfernt alle vorhandenen aktuellen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten.

Wenn das eingefügte Element bereits in einer Liste enthalten ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das in die Liste eingefügt wird.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das Element, das in die Liste eingefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Neu-Initialisierung der Transformationsliste mit einer neuen Transformation

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Apply an initial translate transformation to the <rect> element
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// Number of transformations before initialization
console.log(
  `Number of transformations before initialization: ${transformList.length}`,
); // Output: 1

// Create a new scale transformation
const scaleTransform = svgElement.createSVGTransform();
scaleTransform.setScale(2, 2);

// Initialize the list with the new scale transform
transformList.initialize(scaleTransform);

// Number of transformations after initialization
console.log(
  `Number of transformations after initialization: ${transformList.length}`,
); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
