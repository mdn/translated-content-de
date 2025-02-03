---
title: "SVGFEComponentTransferElement: height Eigenschaft"
short-title: height
slug: Web/API/SVGFEComponentTransferElement/height
l10n:
  sourceCommit: f9881dd30bec0793e97782578dbb8b8d859ce9f9
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft des [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement) Interfaces beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComponentTransfer")}}-Element und dessen {{SVGAttr("height")}}-Filterprimitive-Attribut wider. Das `<feComponentTransfer>`-Filter führt eine komponentenweise Farbund Alphatransparenz-Neuzuordnung durch, wodurch Einstellungen für Helligkeit, Kontrast, Farbbalance und Schwelle ermöglicht werden.

Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheiten des Koordinatensystems.

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
