---
title: "SVGFEPointLightElement: z Eigenschaft"
short-title: z
slug: Web/API/SVGFEPointLightElement/z
l10n:
  sourceCommit: 1c8ca24f56e08e13f079c97693c180ed616ac3ba
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`z`** des [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)-Interfaces beschreibt den Z-Achsen-Wert der Position einer SVG-Filterprimitive als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber). Eine positive Z-Achse zeigt in Richtung der Person, die den Inhalt betrachtet.

Sie spiegelt das {{SVGAttr("z")}}-Attribut des {{SVGElement("fePointLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Punktlicht-Effekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber).

## Beispiel

```js
const fePointLight = document.querySelector("fePointLight");
const zVal = fePointLight.z;
console.log(zVal.baseVal.value); // the `z` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEPointLightElement.x`](/de/docs/Web/API/SVGFEPointLightElement/x)
- [`SVGFEPointLightElement.y`](/de/docs/Web/API/SVGFEPointLightElement/y)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)
