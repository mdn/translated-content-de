---
title: "SVGTransformList: Methode removeItem()"
short-title: removeItem()
slug: Web/API/SVGTransformList/removeItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `removeItem()`-Methode der Schnittstelle [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) entfernt ein bestehendes Element aus der Liste.

## Syntax

```js-nolint
SVGTransformList.removeItem(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des zu entfernenden Elements als unsigned long.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das aus der Liste entfernte Element.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Indexnummer größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) ist.

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
