---
title: "SVGTransformList: consolidate()-Methode"
short-title: consolidate()
slug: Web/API/SVGTransformList/consolidate
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die `consolidate()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle konsolidiert die Liste separater [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekte, indem sie die entsprechenden Transformationsmatrizen multipliziert, um eine Liste zu erhalten, die aus einem einzigen `SVGTransform`-Objekt vom Typ `SVG_TRANSFORM_MATRIX` besteht.

Der Konsolidierungsvorgang erstellt ein neues `SVGTransform`-Objekt als das erste und einzige Element in der Liste.

Das zurückgegebene Element ist das Element selbst und keine Kopie. Jegliche Änderungen am Element werden sofort in der Liste reflektiert.

## Syntax

```js-nolint
SVGTransformList.consolidate()
```

### Parameter

Keine.

### Rückgabewert

Ein aktives [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; die konsolidierte Transformation.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Konsolidierung von Transformationen

```html
<svg width="200" height="200">
  <rect
    width="100"
    height="100"
    fill="red"
    transform="translate(50,50) rotate(45)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Consolidate the transformations
const consolidatedTransform = transformList.consolidate();

console.dir(consolidatedTransform); // Output: SVGTransform { type: 1, matrix: SVGMatrix, angle: 0 }
console.log(transformList.numberOfItems); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
