---
title: "SVGFEDiffuseLightingElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEDiffuseLightingElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle beschreibt die horizontale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Diese spiegelt das {{SVGElement("feDiffuseLighting")}}-Element-Attribute {{SVGAttr("width")}} der Filterprimitive wider. Der Filter beleuchtet ein Bild, indem er den Alphakanal als Bump-Map verwendet. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const horizontalSize = feDiffuseLighting.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.height`](/de/docs/Web/API/SVGFEDiffuseLightingElement/height)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
