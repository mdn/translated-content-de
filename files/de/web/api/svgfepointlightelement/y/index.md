---
title: "SVGFEPointLightElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEPointLightElement/y
l10n:
  sourceCommit: 1c8ca24f56e08e13f079c97693c180ed616ac3ba
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft des [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)-Interfaces beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitiven als ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("fePointLight")}}-Elements wider, das zur Definition der Lichtquelle in einem Punktlichteinfluss verwendet werden kann. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const fePointLight = document.querySelector("fePointLight");
const topPosition = fePointLight.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEPointLightElement.x`](/de/docs/Web/API/SVGFEPointLightElement/x)
- [`SVGFEPointLightElement.z`](/de/docs/Web/API/SVGFEPointLightElement/z)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)
