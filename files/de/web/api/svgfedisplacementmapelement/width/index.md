---
title: "SVGFEDisplacementMapElement: width Eigenschaft"
short-title: width
slug: Web/API/SVGFEDisplacementMapElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement) Schnittstelle beschreibt die horizontale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feDisplacementMap")}}-Element und dessen {{SVGAttr("width")}}-Attribut der Filterprimitive wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheiten des Koordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const horizontalSize = feDisplacementMap.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDisplacementMapElement.height`](/de/docs/Web/API/SVGFEDisplacementMapElement/height)
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) API und {{SVGElement("feImage")}}-Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) API und {{SVGElement("feTurbulence")}}-Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
