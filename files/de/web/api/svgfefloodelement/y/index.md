---
title: "SVGFEFloodElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEFloodElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, das eine SVG-Filter-Teilregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitensystem-Einheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const topPosition = feFlood.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.x`](/de/docs/Web/API/SVGFEFloodElement/x) - [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_Filters_Tutorial)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
