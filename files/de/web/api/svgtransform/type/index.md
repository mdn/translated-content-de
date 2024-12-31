---
title: "SVGTransform: type-Eigenschaft"
short-title: type
slug: Web/API/SVGTransform/type
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die **`type`**-nur lesbare Eigenschaft der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle gibt den `Typ` der Transformation an, der durch eine der auf dieser Schnittstelle definierten `SVG_TRANSFORM_*`-Konstanten spezifiziert ist.

## Wert

Ein `integer`; der Typ des Wertes als `unsigned short`.

## Beispiele

### Bestimmung des Typs einer Transformation

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a translation transform
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// Check the type of the added transform
console.log(transformList.getItem(0).type); // Output: 2 (SVG_TRANSFORM_TRANSLATE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
