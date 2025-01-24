---
title: "SVGFESpecularLightingElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFESpecularLightingElement/width
l10n:
  sourceCommit: fdd5a169978046c3905a65b85dbf597fffca1a25
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filter-Primitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, das eine Quellgrafik unter Verwendung des Alphakanals als Bump-Map beleuchtet. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage)-Wert relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheit-Koordinatensystemeinheiten.

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
- CSS {{cssxref("lighting-color")}}-Eigenschaft
