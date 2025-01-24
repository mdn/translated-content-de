---
title: "SVGFESpecularLightingElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFESpecularLightingElement/height
l10n:
  sourceCommit: fdd5a169978046c3905a65b85dbf597fffca1a25
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, das eine Quellgrafik mit dem Alpha-Kanal als Reliefkarte beleuchtet. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
