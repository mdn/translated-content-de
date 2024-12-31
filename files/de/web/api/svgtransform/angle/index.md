---
title: "SVGTransform: angle-Eigenschaft"
short-title: angle
slug: Web/API/SVGTransform/angle
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die **`angle`**-Eigenschaft (nur lesbar) der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle stellt den Winkel der Transformation in Grad dar.

Bei `SVG_TRANSFORM_ROTATE`, `SVG_TRANSFORM_SKEWX` und `SVG_TRANSFORM_SKEWY` gibt `angle` den Rotations- oder Scherwinkel der Transformation an.

Für `SVG_TRANSFORM_MATRIX`, `SVG_TRANSFORM_TRANSLATE` und `SVG_TRANSFORM_SCALE` beträgt `angle` Null.

## Wert

Ein `integer`; der Winkelwert in Grad als Fließkommazahl.

## Beispiele

### Zugriff auf die `angle`-Eigenschaft

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="green" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a rotation transform
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(45, 100, 100); // Rotate 45 degrees
transformList.appendItem(rotateTransform);

// Access the angle property
console.log(transformList.getItem(0).angle); // Output: 45
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
