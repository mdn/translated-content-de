---
title: "SVGFEGaussianBlurElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEGaussianBlurElement/width
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`width`** der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt die horizontale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("width")}} des Elements {{SVGElement("feGaussianBlur")}} wider, das ein Eingabebild weichzeichnet. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)- oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)-Wert, der sich auf die Breite des Filterbereichs bezieht. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
