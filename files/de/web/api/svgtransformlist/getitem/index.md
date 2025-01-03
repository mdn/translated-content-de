---
title: "SVGTransformList: Methode getItem()"
short-title: getItem()
slug: Web/API/SVGTransformList/getItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `getItem()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle gibt das angegebene Element aus der Liste zurück.

Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die an dem Element vorgenommen werden, spiegeln sich sofort in der Liste wider.

Das erste Element hat den Index `0`.

## Syntax

```js-nolint
SVGTransformList.getItem(index)
```

### Parameter

- `index`
  - : Ein `integer`; der Index des angegebenen Elements als `unsigned long`.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; das angegebene Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Zugriff auf ein Element aus der Transformationsliste

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

// Apply a translate transformation to the <rect> element
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// Get the first item from the transform list
const firstTransform = transformList.getItem(0);

// Log the transformation type
console.log(`Transformation Type: ${firstTransform.type}`); // Output: 2 (for SVG_TRANSFORM_TRANSLATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)