---
title: "SVGFEConvolveMatrixElement: y Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEConvolveMatrixElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filter-Primitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feConvolveMatrix")}}-Elements wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixfaltungseffekt an, wobei Pixel des Eingabebildes mit benachbarten Pixeln kombiniert werden, um Effekte wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abschrägen zu erzeugen.

Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im benutzerdefinierten Koordinatensystem, die die definierte Distanz vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in benutzerdefinierten Koordinatensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const topPosition = feConvolveMatrix.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEConvolveMatrixElement.x`](/de/docs/Web/API/SVGFEConvolveMatrixElement/x)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- SVG {{SVGElement("filter")}}-Element, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
