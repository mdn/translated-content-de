---
title: "SVGFEFloodElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEFloodElement/y
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filter-Subregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Opazität füllt. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, welche die gegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert darstellt, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitskoordinaten. Der Standardwert ist `0`.

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

- [`SVGFEFloodElement.x`](/de/docs/Web/API/SVGFEFloodElement/x)
- [SVG-Filter-Leitfaden](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
