---
title: "SVGFESpecularLightingElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFESpecularLightingElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, welches eine Quellgrafik mit dem Alphakanal als Bump-Map beleuchtet. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) im Verhältnis zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const verticalSize = feSpecularLighting.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.width`](/de/docs/Web/API/SVGFESpecularLightingElement/width)
- [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)
- CSS {{cssxref("lighting-color")}}-Eigenschaft
