---
title: "SVGTransformList: removeItem()-Methode"
short-title: removeItem()
slug: Web/API/SVGTransformList/removeItem
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die Methode `removeItem()` des [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Interfaces entfernt ein vorhandenes Element aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des Elements, das als unsigned long entfernt werden soll.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das entfernte Element aus der Liste.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Indexnummer größer oder gleich der [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) ist.

## Beispiele

### Entfernen einer Transformation aus der Liste

```html
<svg width="200" height="200" id="mySvg">
  <rect
    width="100"
    height="100"
    fill="blue"
    transform="translate(50,50) rotate(45)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

const removedTransform = transformList.removeItem(0);
console.dir(removedTransform); // Output: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }

// The updated list length
console.log(`Updated number of transformations: ${transformList.length}`); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`SVGTransformList.numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
