---
title: "SVGFEMergeElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEMergeElement/height
l10n:
  sourceCommit: 2b0c47e02bba6be47057507f217f8267a6916ec8
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft der [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), das relativ zur Höhe der Filterregion ist. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Benutzereinheitensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMerge = document.querySelector("feMerge");
const verticalSize = feMerge.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMergeElement.width`](/de/docs/Web/API/SVGFEMergeElement/width)
