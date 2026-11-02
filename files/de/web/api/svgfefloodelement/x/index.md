---
title: "SVGFEFloodElement: Eigenschaft x"
short-title: x
slug: Web/API/SVGFEFloodElement/x
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("x")}} des Elements {{SVGElement("feFlood")}} wider, das einen SVG-Filter-Teilbereich mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} festgelegten Farbe und Deckkraft füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse bezeichnet. Wenn das Attribut `x` einen Prozentwert hat, bezieht sich der Eigenschaftswert auf die Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const leftPosition = feFlood.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.y`](/de/docs/Web/API/SVGFEFloodElement/y)
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
