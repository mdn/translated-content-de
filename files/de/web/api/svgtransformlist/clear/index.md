---
title: "SVGTransformList: clear() Methode"
short-title: clear()
slug: Web/API/SVGTransformList/clear
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `clear()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle entfernt alle vorhandenen aktuellen Elemente aus der Liste, sodass eine leere Liste entsteht.

## Syntax

```js-nolint
SVGTransformList.clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Alle Transformationen von einem SVG-Element entfernen

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

// Apply a translate transformation to the <rect> element
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// Number of transformations before clearing
console.log(
  `Number of transformations before clearing: ${transformList.length}`,
); // Output: 1

// Clear all transformations from the list
transformList.clear();

// Number of transformations after clearing
console.log(
  `Number of transformations after clearing: ${transformList.length}`,
); // Output: 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
