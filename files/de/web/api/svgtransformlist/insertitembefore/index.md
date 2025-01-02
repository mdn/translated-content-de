---
title: "SVGTransformList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGTransformList/insertItemBefore
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `insertItemBefore()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein.

Das erste Element hat den Index `0`. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.

- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der `index` des einzufügenden Elements vor dem Entfernen des Elements liegt.

- Wenn der `index` gleich `0` ist, wird das neue Element an den Anfang der Liste eingefügt.

- Wenn der `index` größer als oder gleich [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
SVGTransformList.insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Element, das in die Liste eingefügt wird.
- `index`
  - : Ein `integer`; der Index, an dem das neue Element als unsigned long eingefügt werden soll.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

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
