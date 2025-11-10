---
title: "SVGFEPointLightElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEPointLightElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft des Lesezugriffs der Schnittstelle [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("fePointLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Punktlichter-Effekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
