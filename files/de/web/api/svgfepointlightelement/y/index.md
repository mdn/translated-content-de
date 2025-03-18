---
title: "SVGFEPointLightElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEPointLightElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft des [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)-Interfaces beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("fePointLight")}}-Elements wider, das zur Definition der Lichtquelle in einem Punktlichteffekt verwendet werden kann. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
