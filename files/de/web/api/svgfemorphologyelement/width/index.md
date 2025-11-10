---
title: "SVGFEMorphologyElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEMorphologyElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Schnittstelle, die nur lesbar ist, beschreibt die horizontale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Attribut des {{SVGElement("feMorphology")}}-Elements wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMorphology = document.querySelector("feMorphology");
const horizontalSize = feMorphology.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMorphologyElement.height`](/de/docs/Web/API/SVGFEMorphologyElement/height)
