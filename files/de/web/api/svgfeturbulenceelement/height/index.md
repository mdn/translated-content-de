---
title: "SVGFETurbulenceElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFETurbulenceElement/height
l10n:
  sourceCommit: ec48a043c5dbedef746b2d85f780f73cef59f332
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der Schnittstelle [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) beschreibt die vertikale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Diese ist schreibgeschützt.

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements wider, welches die Synthese von künstlichen Texturen ermöglicht. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheiten des Koordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTurbulence = document.querySelector("feTurbulence");
const verticalSize = feTurbulence.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETurbulenceElement.width`](/de/docs/Web/API/SVGFETurbulenceElement/width)
