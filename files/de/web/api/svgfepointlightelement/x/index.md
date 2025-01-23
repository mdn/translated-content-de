---
title: "SVGFEPointLightElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEPointLightElement/x
l10n:
  sourceCommit: 1c8ca24f56e08e13f079c97693c180ed616ac3ba
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft des [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("x")}} Attribut des {{SVGElement("fePointLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Punktlichteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const fePointLight = document.querySelector("fePointLight");
const leftPosition = fePointLight.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEPointLightElement.y`](/de/docs/Web/API/SVGFEPointLightElement/y)
- [`SVGFEPointLightElement.z`](/de/docs/Web/API/SVGFEPointLightElement/z)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)
