---
title: "SVGFESpecularLightingElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFESpecularLightingElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Schreibgeschützte Eigenschaft des [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement) Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie entspricht dem {{SVGAttr("width")}} Attribut des {{SVGElement("feSpecularLighting")}} Elements, das eine Quellgrafik unter Verwendung des Alphakanals als Bump-Map beleuchtet. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystem-Einheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const horizontalSize = feSpecularLighting.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.height`](/de/docs/Web/API/SVGFESpecularLightingElement/height)
- [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)
- CSS {{cssxref("lighting-color")}} Eigenschaft
