---
title: "SVGFESpotLightElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFESpotLightElement/y
l10n:
  sourceCommit: ecf3cfc28e9b74de9adc257bac245bcdc6a02559
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Spotlichteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

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
