---
title: "SVGFESpotLightElement: z-Eigenschaft"
short-title: z
slug: Web/API/SVGFESpotLightElement/z
l10n:
  sourceCommit: ecf3cfc28e9b74de9adc257bac245bcdc6a02559
---

{{APIRef("SVG")}}

Die **`z`** schreibgeschützte Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle beschreibt den Z-Achsen-Wert der Position eines SVG-Filterprimitives als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber). Eine positive Z-Achse kommt auf die Person zu, die den Inhalt betrachtet.

Sie spiegelt das {{SVGAttr("z")}}-Attribut des {{SVGElement("feSpotLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Scheinwerfereffekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

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
