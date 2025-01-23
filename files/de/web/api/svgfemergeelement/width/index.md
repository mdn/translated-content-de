---
title: "SVGFEMergeElement: `width`-Eigenschaft"
short-title: width
slug: Web/API/SVGFEMergeElement/width
l10n:
  sourceCommit: 2b0c47e02bba6be47057507f217f8267a6916ec8
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Größe eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie entspricht dem {{SVGAttr("width")}}-Attribut des {{SVGElement("feMerge")}}-Elements. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
