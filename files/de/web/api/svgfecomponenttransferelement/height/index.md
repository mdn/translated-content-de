---
title: "SVGFEComponentTransferElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEComponentTransferElement/height
l10n:
  sourceCommit: 555feb3f59cfdea83d769ce9f38baebc679f0681
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComponentTransfer")}}-Element-Attribut {{SVGAttr("height")}} für die Filterprimitive wider. Der `<feComponentTransfer>`-Filter führt eine komponentenweise Farb- und Alphatransparenz-Neuzuordnung durch, die Helligkeits-, Kontrast-, Farbgleichgewichts- und Schwellenwertanpassungen ermöglicht.

Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheit-Koordinaten.

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
