---
title: "SVGFEFloodElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEFloodElement/y
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`y`** der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("y")}} des Elements {{SVGElement("feFlood")}} wider, das einen SVG-Filterteilbereich mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} festgelegten Farbe und Deckkraft füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)- oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)-Wert. `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das Attribut `y` einen Prozentwert hat, bezieht sich der Eigenschaftswert auf die Höhe des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
