---
title: "SVGFEFloodElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEFloodElement/height
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`height`** der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt die vertikale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("height")}} des Elements {{SVGElement("feFlood")}} wider, das einen Teilbereich eines SVG-Filters mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} festgelegten Farbe und Deckkraft füllt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)- oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)-Wert, bezogen auf die Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feFlood = document.querySelector("feFlood");
const verticalSize = feFlood.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFloodElement.width`](/de/docs/Web/API/SVGFEFloodElement/width)
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
