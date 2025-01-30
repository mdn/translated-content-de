---
title: "SVGFEColorMatrixElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEColorMatrixElement/height
l10n:
  sourceCommit: ac0a3f797c6c81e964f49bf0f491cd08154d848f
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der Schnittstelle [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement) beschreibt die vertikale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feColorMatrix")}}-Element und das Filterprimitiv-Attribut {{SVGAttr("height")}} wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "Alpha")}}-Werte an.

Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzerkoordinatensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const verticalSize = feColorMatrix.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEColorMatrixElement.width`](/de/docs/Web/API/SVGFEColorMatrixElement/width)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
- [CSS Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
