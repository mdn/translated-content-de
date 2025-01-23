---
title: "SVGFESpotLightElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFESpotLightElement/x
l10n:
  sourceCommit: ecf3cfc28e9b74de9adc257bac245bcdc6a02559
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der Schnittstelle [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Spotlichteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const feSpotLight = document.querySelector("feSpotLight");
const leftPosition = feSpotLight.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpotLightElement.y`](/de/docs/Web/API/SVGFESpotLightElement/y)
- [`SVGFESpotLightElement.z`](/de/docs/Web/API/SVGFESpotLightElement/z)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)
