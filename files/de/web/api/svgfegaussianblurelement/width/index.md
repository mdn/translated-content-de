---
title: "SVGFEGaussianBlurElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEGaussianBlurElement/width
l10n:
  sourceCommit: 94b32d908c0f13c1c2555996806454f7a0a48588
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Größe einer SVG-Filterprimitiven als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, welches ein Eingangsbild verwischt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage), das relativ zur Breite des Filterbereichs ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feGaussianBlur = document.querySelector("feGaussianBlur");
const horizontalSize = feGaussianBlur.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.height`](/de/docs/Web/API/SVGFEGaussianBlurElement/height)
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul - CSS {{cssxref("mix-blend-mode")}} Eigenschaft
