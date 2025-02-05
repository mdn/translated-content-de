---
title: "SVGFEPointLightElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEPointLightElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

Diese Eigenschaft spiegelt das Attribut {{SVGAttr("y")}} des {{SVGElement("fePointLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Punktlichtereffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

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
