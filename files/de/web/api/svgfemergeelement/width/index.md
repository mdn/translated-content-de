---
title: "SVGFEMergeElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEMergeElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMerge = document.querySelector("feMerge");
const horizontalSize = feMerge.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMergeElement.height`](/de/docs/Web/API/SVGFEMergeElement/height)
