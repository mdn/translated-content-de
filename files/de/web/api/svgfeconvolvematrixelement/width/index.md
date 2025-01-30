---
title: "SVGFEConvolveMatrixElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEConvolveMatrixElement/width
l10n:
  sourceCommit: e0bf626da04e5e1e21373fe4011e20fdcaae62a0
---

{{APIRef("SVG")}}

Die **`width`**-Schreibgeschützte Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Element und das Filterprimitivattribut {{SVGAttr("width")}} wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixfaltungseffekt an, bei dem Pixel im Eingabebild mit benachbarten Pixeln kombiniert werden, um einen Faltungseffekt wie Unschärfe, Kantenerkennung, Schärfung, Prägung oder Abschrägung zu erzeugen. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
