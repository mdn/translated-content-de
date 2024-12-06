---
title: SVGAnimatedTransformList.baseVal Eigenschaft
short-title: baseVal
slug: Web/API/SVGAnimatedTransformList/baseVal
l10n:
  sourceCommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der Schnittstelle [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) ist eine schreibgeschützte Eigenschaft, die den nicht-animierten Wert des `transform`-Attributs eines SVG-Elements darstellt.

Diese Eigenschaft spiegelt das `{{SVGAttr("transform")}}`-Attribut des SVG-Elements wider, das Attribut `{{SVGAttr("gradientTransform")}}` des {{SVGElement("linearGradient")}}- oder {{SVGElement("radialGradient")}}-Elements oder das `{{SVGAttr("patternTransform")}}`-Attribut des {{SVGElement("pattern")}}-Elements als ein schreibgeschütztes [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) wider und bietet Zugriff auf ein statisches [`SVGTransform`](/de/docs/Web/API/SVGTransform) für jede auf dem SVG-Element festgelegte Transformationsfunktion.

## Wert

Ein [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) Objekt, das den aktuellen, nicht-animierten Wert des `transform`-Attributs darstellt.

## Beispiele

```js
// Get the rectangle element
const rect = document.querySelector("rect");

// Access the non-animated transform list of the element
const baseTransforms = rect.transform.baseVal;

// Log the base transforms to the console
console.dir(baseTransforms);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
