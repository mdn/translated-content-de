---
title: "SVGTransformList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGTransformList/initialize
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `initialize()`-Methode des [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Interfaces löscht alle aktuellen Elemente von der Liste und initialisiert die Liste neu, um das einzelne Element zu halten, das durch den Parameter angegeben ist.

Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
SVGTransformList.initialize(newItem)
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

### Die Transformationsliste mit einer neuen Transformation neu initialisieren

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
