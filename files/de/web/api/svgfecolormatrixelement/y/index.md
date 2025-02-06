---
title: "SVGFEColorMatrixElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEColorMatrixElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feColorMatrix")}}-Elements der {{SVGAttr("y")}}-Filterprimitiv-Attributs wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "Alpha")}}-Werte an. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzereinheitensystem, welche die gegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Ist das `y`-Attribut ein Prozentwert, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzereinheitensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const topPosition = feColorMatrix.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEColorMatrixElement.x`](/de/docs/Web/API/SVGFEColorMatrixElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG-{{SVGElement("filter")}}-Element, SVG-{{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
