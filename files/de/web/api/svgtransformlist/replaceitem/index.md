---
title: "SVGTransformList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGTransformList/replaceItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `replaceItem()`-Methode der Schnittstelle [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) ersetzt ein vorhandenes Element in der Liste durch ein neues Element.

Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.

- Wenn das Element bereits in dieser Liste enthalten ist, beachten Sie, dass der `index` des zu ersetzenden Elements vor der Entfernung des Elements ist.

## Syntax

```js-nolint
SVGTransformList.replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das in die Liste eingefügt wird.
- `index`
  - : Ein `integer`; der Index, an dem das neue Element das vorhandene ersetzen soll, als unsigniertes long.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Indexnummer größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) ist.

## Beispiele

### Ersetzen einer Transformation in der Liste

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" transform="translate(50,50)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a new rotation transformation
const rotateTransform = svgElement.createSVGTransform();
rotateTransform.setRotate(45, 50, 50);

transformList.replaceItem(rotateTransform, 0);

// Log the details of the new transformation
console.log(`New Transformation Type: ${transformList.getItem(0).type}`); // Output: 4 (e.g. SVG_TRANSFORM_ROTATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`SVGTransformList.numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
