---
title: "SVGTransformList: appendItem()-Methode"
short-title: appendItem()
slug: Web/API/SVGTransformList/appendItem
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `appendItem()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle fügt ein neues Element am Ende der Liste ein.

Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das der Liste hinzugefügt wird.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Hinzufügen einer neuen Transformation

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="red" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a new translation transformation
const svgTransform = svgElement.createSVGTransform();
svgTransform.setTranslate(50, 50);

// Append the new transformation to the list
const appendedTransform = transformList.appendItem(svgTransform);

console.dir(appendedTransform); // Output: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }
console.log(`Total number of transformations: ${transformList.numberOfItems}`); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`SVGTransformList.numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
