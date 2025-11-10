---
title: "SVGFEPointLightElement: z-Eigenschaft"
short-title: z
slug: Web/API/SVGFEPointLightElement/z
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`z`** schreibgeschützte Eigenschaft des [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)-Interfaces beschreibt den Z-Achsen-Wert der Position einer SVG-Filterprimitive als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber). Eine positive Z-Achse kommt auf die Person zu, die den Inhalt betrachtet.

Sie spiegelt das {{SVGAttr("z")}}-Attribut des {{SVGElement("fePointLight")}}-Elements wider, das verwendet werden kann, um die Lichtquelle in einem Punktlicht-Effekt zu definieren. Das Attribut ist ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der Standardwert ist `0`.

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
