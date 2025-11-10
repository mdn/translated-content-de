---
title: "SVGFEComponentTransferElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEComponentTransferElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComponentTransfer")}}-Element und dessen {{SVGAttr("height")}}-Filter-Primitivenattribut wider. Das `<feComponentTransfer>`-Filter führt eine komponentenweise Farb- und Alphatransparenzumsetzung durch und ermöglicht Helligkeits-, Kontrast-, Farbbalance- und Schwellenwertanpassungen.

Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Nutzereinheit-Koordinatensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const verticalSize = feComponentTransfer.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEComponentTransferElement.width`](/de/docs/Web/API/SVGFEComponentTransferElement/width)
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}
