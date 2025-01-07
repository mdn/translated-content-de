---
title: "SVGFEDiffuseLightingElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEDiffuseLightingElement/height
l10n:
  sourceCommit: 6f958c59155cfa5142076187384690a679f346ec
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft des [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement) Interfaces beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feDiffuseLighting")}}-Element und das {{SVGAttr("height")}}-Filterprimitive-Attribut wider. Der Filter beleuchtet ein Bild, indem er den Alphakanal als Bump-Map verwendet. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const verticalSize = feDiffuseLighting.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.width`](/de/docs/Web/API/SVGFEDiffuseLightingElement/width)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
