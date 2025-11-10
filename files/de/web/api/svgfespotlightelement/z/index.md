---
title: "SVGFESpotLightElement: z-Eigenschaft"
short-title: z
slug: Web/API/SVGFESpotLightElement/z
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`z`**-Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle beschreibt den Z-Achsenwert der Position eines SVG-Filter-Primitivelements als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber). Eine positive Z-Achse ragt zum Betrachter des Inhalts hin aus.

Sie spiegelt das {{SVGAttr("z")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Spotlichteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const feSpotLight = document.querySelector("feSpotLight");
const zVal = feSpotLight.z;
console.log(zVal.baseVal.value); // the `z` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpotLightElement.x`](/de/docs/Web/API/SVGFESpotLightElement/x)
- [`SVGFESpotLightElement.y`](/de/docs/Web/API/SVGFESpotLightElement/y)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)
