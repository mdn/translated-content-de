---
title: "SVGFEMorphologyElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEMorphologyElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der Schnittstelle [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement) beschreibt die vertikale Größe eines SVG-Filterprimitives als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feMorphology")}}-Elements wider. Das Attribut ist entweder eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das relativ zur Höhe der Filterregion ist. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Benutzersystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMorphology = document.querySelector("feMorphology");
const verticalSize = feMorphology.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMorphologyElement.width`](/de/docs/Web/API/SVGFEMorphologyElement/width)
