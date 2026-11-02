---
title: "SVGFEGaussianBlurElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEGaussianBlurElement/height
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`height`** der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("height")}} des Elements {{SVGElement("feGaussianBlur")}} wider, das ein Eingabebild weichzeichnet. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), bezogen auf die Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
