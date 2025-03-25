---
title: "SVGFEConvolveMatrixElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEConvolveMatrixElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`y`** des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filter-Primitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feConvolveMatrix")}}-Elements wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixfaltungseffekt an, indem er Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Faltungseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abschrägen zu erzeugen.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
