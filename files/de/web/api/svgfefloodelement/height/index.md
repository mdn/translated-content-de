---
title: "SVGFEFloodElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEFloodElement/height
l10n:
  sourceCommit: 446fc3bbd82b46e4e3ae500332d807c843ebb7d7
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}} Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filter-Teilregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Opazität füllt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), das sich auf die Höhe der Filterregion bezieht. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheits-Koordinatensystemen.

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

- [`SVGFEFloodElement.width`](/de/docs/Web/API/SVGFEFloodElement/width) - [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
