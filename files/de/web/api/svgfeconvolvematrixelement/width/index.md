---
title: "SVGFEConvolveMatrixElement: width Eigenschaft"
short-title: width
slug: Web/API/SVGFEConvolveMatrixElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Elementattribut {{SVGAttr("width")}} des Filterprimitives wider. Das `<feConvolveMatrix>`-Filter wendet einen Matrix-Konvolutionseffekt an, bei dem Pixel im Eingabebild mit benachbarten Pixeln kombiniert werden, um einen Konvolutionseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abfasen zu erzeugen. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das relativ zur Breite des Filterbereichs ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
- Modul [CSS filter effects](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
