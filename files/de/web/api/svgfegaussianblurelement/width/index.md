---
title: "SVGFEGaussianBlurElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEGaussianBlurElement/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie reflektiert das {{SVGAttr("width")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements, das ein Eingabebild unscharf macht. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitskoordinatensystemen.

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
- [SVG-Filter-Leitfaden](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul - CSS {{cssxref("mix-blend-mode")}} Eigenschaft
