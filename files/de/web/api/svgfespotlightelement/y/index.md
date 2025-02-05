---
title: "SVGFESpotLightElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFESpotLightElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das zum Definieren der Lichtquelle in einem Spotlichteffekt verwendet werden kann. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const feSpotLight = document.querySelector("feSpotLight");
const topPosition = feSpotLight.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpotLightElement.x`](/de/docs/Web/API/SVGFESpotLightElement/x)
- [`SVGFESpotLightElement.z`](/de/docs/Web/API/SVGFESpotLightElement/z)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)
