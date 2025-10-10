---
title: "SVGFESpotLightElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFESpotLightElement/y
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitivs als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Spotlichteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
