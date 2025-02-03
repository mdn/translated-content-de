---
title: "SVGGraphicsElement: transform-Eigenschaft"
short-title: transform
slug: Web/API/SVGGraphicsElement/transform
l10n:
  sourceCommit: 9610581b70432f8f931b22d8d968fc3738996b3c
---

{{APIRef("SVG")}}

Die **`transform`**-Schreibgeschützte Eigenschaft der [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)-Schnittstelle spiegelt den berechneten Wert der Transformations-Eigenschaft und das dazugehörige {{SVGAttr("transform")}}-Attribut des gegebenen Elements wider.

## Wert

Ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Objekt.

## Beispiele

### Zugriff auf die `transform`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <!-- Rectangle with a transformation applied -->
  <rect
    id="rect1"
    x="50"
    y="50"
    width="100"
    height="100"
    fill="blue"
    transform="translate(20, 30) rotate(45)" />
</svg>
```

```js
// Access the SVG element
const rect = document.getElementById("rect1");

// Get the transform list
const transformList = rect.transform.baseVal;

// Iterate through and log each transformation
for (let i = 0; i < transformList.numberOfItems; i++) {
  const transform = transformList.getItem(i);
  console.log(`Type: ${transform.type}, Matrix: ${transform.matrix}`);
}
// Example output:
// Type: 2 (SVG_TRANSFORM_TRANSLATE), Matrix: SVGMatrix { ... }
// Type: 4 (SVG_TRANSFORM_ROTATE), Matrix: SVGMatrix { ... }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
