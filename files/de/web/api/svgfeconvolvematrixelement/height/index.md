---
title: "SVGFEConvolveMatrixElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEConvolveMatrixElement/height
l10n:
  sourceCommit: e0bf626da04e5e1e21373fe4011e20fdcaae62a0
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Element wider, das Attribut {{SVGAttr("height")}} der Filterprimitive. Der `<feConvolveMatrix>`-Filter wendet einen Matrix-Faltungseffekt an, bei dem Pixel im Eingabebild mit benachbarten Pixeln kombiniert werden, um einen Faltungseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abschrägen zu erzielen. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzersystem-Koordinateneinheiten.

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
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
