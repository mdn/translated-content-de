---
title: "SVGFESpotLightElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFESpotLightElement/x
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement) Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber). Diese Eigenschaft ist schreibgeschützt.

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, welches verwendet werden kann, um die Lichtquelle in einem Spotlight-Effekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
