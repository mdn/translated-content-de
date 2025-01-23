---
title: "SVGFEGaussianBlurElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEGaussianBlurElement/height
l10n:
  sourceCommit: 94b32d908c0f13c1c2555996806454f7a0a48588
---

{{APIRef("SVG")}}

Die **`height`**-Schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingabebild verwischt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

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
- [SVG-Filter-Leitfaden](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul - CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
