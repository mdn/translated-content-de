---
title: "SVGFEColorMatrixElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEColorMatrixElement/x
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filter-Primitivelements als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feColorMatrix")}}-Element-Attributs {{SVGAttr("x")}} des Filterprimitivs wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farben und {{Glossary("alpha", "Alpha")}}-Werte an. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem der Koordinaten, die den angegebenen Abstand vom Ursprung des Benutzersystems der Koordinaten entlang der x-Achse misst. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzersystems der Koordinaten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const leftPosition = feColorMatrix.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEColorMatrixElement.y`](/de/docs/Web/API/SVGFEColorMatrixElement/y)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
