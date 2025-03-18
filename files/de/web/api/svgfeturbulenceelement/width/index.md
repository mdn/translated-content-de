---
title: "SVGFETurbulenceElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFETurbulenceElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements wider, welches die Synthese künstlicher Texturen ermöglicht. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

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
