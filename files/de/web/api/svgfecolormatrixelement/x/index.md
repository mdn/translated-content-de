---
title: "SVGFEColorMatrixElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGFEColorMatrixElement/x
l10n:
  sourceCommit: ac0a3f797c6c81e964f49bf0f491cd08154d848f
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft des [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feColorMatrix")}}-Element-Attributs {{SVGAttr("x")}} des Filterprimitivs wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "Alpha")}}-Werte an. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- [CSS filter effects](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Applying SVG effects to HTML content](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
