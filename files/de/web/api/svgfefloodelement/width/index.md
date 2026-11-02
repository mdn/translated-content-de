---
title: "SVGFEFloodElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEFloodElement/width
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`width`** der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt die horizontale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("width")}} des Elements {{SVGElement("feFlood")}} wider, das einen Teilbereich eines SVG-Filters mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} festgelegten Farbe und Deckkraft füllt. Das Attribut ist eine [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), bezogen auf die Breite des Filterbereichs. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const horizontalSize = feFlood.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.height`](/de/docs/Web/API/SVGFEFloodElement/height)
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
