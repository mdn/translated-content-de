---
title: "SVGTransformList: consolidate() Methode"
short-title: consolidate()
slug: Web/API/SVGTransformList/consolidate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

Die `consolidate()`-Methode der [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstelle konsolidiert die Liste der einzelnen [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekte, indem die entsprechenden Transformationsmatrizen multipliziert werden, um eine Liste zu erhalten, die aus einem einzigen `SVGTransform`-Objekt des Typs `SVG_TRANSFORM_MATRIX` besteht.

Die Konsolidierungsoperation erstellt ein neues `SVGTransform`-Objekt als das erste und einzige Element in der Liste.

Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen an dem Element werden sofort in der Liste reflektiert.

## Syntax

```js-nolint
consolidate()
```

### Parameter

Keine.

### Rückgabewert

Ein Live-[`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt; die konsolidierte Transformation.

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
