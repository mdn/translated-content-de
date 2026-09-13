---
title: "SVGTransformList: Methode replaceItem()"
short-title: replaceItem()
slug: Web/API/SVGTransformList/replaceItem
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Methode `replaceItem()` der Schnittstelle [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) ersetzt ein vorhandenes Element in der Liste durch ein neues Element.

Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn sich `newItem` bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.

- Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der `index` des zu ersetzenden Elements vor dem Entfernen des Elements bestimmt wird.

Die Zuweisung zu einem Index der Liste hat dieselbe Wirkung wie der Aufruf dieser Methode, mit der Ausnahme, dass kein Rückgabewert vorhanden ist.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das in die Liste eingefügt wird.
- `index`
  - : Ein `integer`; der Index, an dem das neue Element das vorhandene ersetzen soll, als unsigned long.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

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
