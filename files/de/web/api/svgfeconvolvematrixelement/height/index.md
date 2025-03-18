---
title: "SVGFEConvolveMatrixElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEConvolveMatrixElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`** Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Element und das {{SVGAttr("height")}}-Filterprimitive-Attribut wider. Das `<feConvolveMatrix>`-Filter wendet einen Matrixfaltungseffekt an, der die Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Faltungseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abfasen zu erzeugen. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das sich auf die Höhe der Filterregion bezieht. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const verticalSize = feConvolveMatrix.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEConvolveMatrixElement.width`](/de/docs/Web/API/SVGFEConvolveMatrixElement/width)
- CSS-Filtereffekte Modul [CSS filter effects](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
