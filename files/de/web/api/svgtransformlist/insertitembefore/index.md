---
title: "SVGTransformList: Methode insertItemBefore()"
short-title: insertItemBefore()
slug: Web/API/SVGTransformList/insertItemBefore
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die Methode `insertItemBefore()` der Schnittstelle [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) fügt ein neues Element an der angegebenen Position in die Liste ein.

Das erste Element ist bei `0` indiziert. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste enthalten ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt.

- Wenn das Element bereits in dieser Liste enthalten ist, beachten Sie, dass der `index` des einzufügenden Elements vor dem Entfernen des Elements gilt.

- Wenn der `index` gleich `0` ist, wird das neue Element an den Anfang der Liste eingefügt.

- Wenn der `index` größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) ist, wird das neue Element an das Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das in die Liste eingefügt wird.
- `index`
  - : Ein `integer`; der Index, an dem das neue Element als "unsigned long" eingefügt werden soll.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Einfügen einer Transformation in die Liste

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

// Create a new translate transformation
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);

// Insert the translation transformation at the beginning of the list
transformList.insertItemBefore(translateTransform, 0);

// The transformation list length and type
console.log(`Number of transformations: ${transformList.length}`); // Output: 1
console.log(`Transformation Type: ${transformList.getItem(0).type}`); // Output: 2 (e.g. SVG_TRANSFORM_TRANSLATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
