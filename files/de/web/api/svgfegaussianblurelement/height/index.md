---
title: "SVGFEGaussianBlurElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEGaussianBlurElement/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingabebild verwischt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const verticalSize = feGaussianBlur.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.width`](/de/docs/Web/API/SVGFEGaussianBlurElement/width)
- [SVG-Filter-Anleitung](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul - CSS {{cssxref("mix-blend-mode")}} Eigenschaft
