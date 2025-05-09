---
title: "SVGTransformList: numberOfItems-Eigenschaft"
short-title: numberOfItems
slug: Web/API/SVGTransformList/numberOfItems
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die schreibgeschützte **`numberOfItems`**-Eigenschaft des [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Interface repräsentiert die Anzahl der Elemente in der Liste.

## Wert

Ein `integer`; die Anzahl der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekte in der Liste als `unsigned long`.

## Beispiele

### Zugriff auf die `numberOfItems`-Eigenschaft

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

console.log(`Number of transformations: ${transformList.numberOfItems}`); // Output: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
