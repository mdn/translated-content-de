---
title: "SVGFEColorMatrixElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEColorMatrixElement/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft des [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Interfaces beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feColorMatrix")}}-Element {{SVGAttr("width")}} Attribut des Filterprimitives wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farben und {{Glossary("alpha", "alpha")}}-Werte an. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheiten des Koordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const horizontalSize = feColorMatrix.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEColorMatrixElement.height`](/de/docs/Web/API/SVGFEColorMatrixElement/height)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
