---
title: SVGAnimatedTransformList.animVal Eigenschaft
short-title: animVal
slug: Web/API/SVGAnimatedTransformList/animVal
l10n:
  sourceCommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Schnittstelle stellt den animierten Wert des `transform`-Attributs eines SVG-Elements dar.

Diese Eigenschaft spiegelt das SVG-Element-{{SVGAttr("transform")}}, das {{SVGElement("linearGradient")}}- oder {{SVGElement("radialGradient")}}-Element-{{SVGAttr("gradientTransform")}}-Attribut oder das {{SVGElement("pattern")}}-Element-{{SVGAttr("patternTransform")}}-Attribut als eine nur lesbare [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) wider, die Zugriff auf das dynamisch aktualisierte [`SVGTransform`](/de/docs/Web/API/SVGTransform) für jede Transformationsfunktion während einer Animation bietet. Wenn keine Animation aktiv ist, gibt diese Eigenschaft denselben Wert wie `baseVal` zurück.

## Wert

Ein [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Objekt, das den aktuellen animierten Wert des `transform`-Attributs widerspiegelt.

## Beispiele

```js
// Get the rectangle element
const rect = document.querySelector("rect");

// Access the animated transform list (if any)
const animTransforms = rect.transform.animVal;

// Log the animated transforms to the console
console.dir(animTransforms);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
