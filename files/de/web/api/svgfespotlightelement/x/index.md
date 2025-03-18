---
title: "SVGFESpotLightElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFESpotLightElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft des schreibgeschützten [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, welches verwendet werden kann, um die Lichtquelle in einem Spotlighteffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
