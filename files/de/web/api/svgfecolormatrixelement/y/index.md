---
title: "SVGFEColorMatrixElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEColorMatrixElement/y
l10n:
  sourceCommit: ac0a3f797c6c81e964f49bf0f491cd08154d848f
---

{{APIRef("SVG")}}

Die **`y`**-Leseeigenschaft des [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feColorMatrix")}}-Elements, des Attributs {{SVGAttr("y")}} eines Filterprimitives wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "alpha")}}-Werte an. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzerkoordinatensystemeinheiten. Der Standardwert ist `0`.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG-Element {{SVGElement("filter")}}, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
