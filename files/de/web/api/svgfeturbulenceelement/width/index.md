---
title: "SVGFETurbulenceElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFETurbulenceElement/width
l10n:
  sourceCommit: ec48a043c5dbedef746b2d85f780f73cef59f332
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements wider, das die Synthese künstlicher Texturen ermöglicht. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), das relativ zur Breite der Filterregion angegeben wird. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTurbulence = document.querySelector("feTurbulence");
const horizontalSize = feTurbulence.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETurbulenceElement.height`](/de/docs/Web/API/SVGFETurbulenceElement/height)
