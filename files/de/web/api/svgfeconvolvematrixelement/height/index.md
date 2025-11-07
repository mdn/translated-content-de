---
title: "SVGFEConvolveMatrixElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEConvolveMatrixElement/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement) beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}} Element-{{SVGAttr("height")}}-Filterprimitiv-Attribut wider. Der `<feConvolveMatrix>`-Filter wendet ein Matrix-Faltungseffekt an, der die Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Faltungs-Effekt wie Verwischen, Kantenerkennung, Schärfen, Prägen oder Abkanten zu erzeugen. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzersystemkoordinateneinheiten.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- SVG {{SVGElement("filter")}} Element, SVG {{SVGAttr("filter")}} Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
