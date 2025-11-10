---
title: "SVGFEConvolveMatrixElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEConvolveMatrixElement/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement) Interfaces beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Elementattribut {{SVGAttr("width")}} des Filterprimitivs wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrix-Faltungseffekt an, bei dem Pixel im Eingabebild mit benachbarten Pixeln kombiniert werden, um einen Faltungseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abfasen zu erzeugen. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const horizontalSize = feConvolveMatrix.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEConvolveMatrixElement.height`](/de/docs/Web/API/SVGFEConvolveMatrixElement/height)
- [CSS Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
