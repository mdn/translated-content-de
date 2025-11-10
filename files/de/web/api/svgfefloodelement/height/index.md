---
title: "SVGFEFloodElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEFloodElement/height
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filterunterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzersystemkoordinateneinheiten.

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
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
