---
title: "SVGFEConvolveMatrixElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEConvolveMatrixElement/y
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filter-Primitiven als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feConvolveMatrix")}}-Elements der {{SVGAttr("y")}}-Filter-Primitive-Attributwert wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixfaltungseffekt an, indem er Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Faltungseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abschrägen zu erzeugen.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die der angegebenen Entfernung vom Ursprung des Filters entlang der y-Achse entspricht. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Benutzereinheitensystemeinheiten. Der Standardwert ist `0`.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)-Modul
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
