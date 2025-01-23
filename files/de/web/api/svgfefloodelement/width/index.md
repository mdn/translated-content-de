---
title: "SVGFEFloodElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEFloodElement/width
l10n:
  sourceCommit: 446fc3bbd82b46e4e3ae500332d807c843ebb7d7
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle beschreibt die horizontale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filterunterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

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

- [`SVGFEFloodElement.height`](/de/docs/Web/API/SVGFEFloodElement/height) - [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
