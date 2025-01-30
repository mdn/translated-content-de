---
title: "SVGFEComponentTransferElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEComponentTransferElement/width
l10n:
  sourceCommit: 555feb3f59cfdea83d769ce9f38baebc679f0681
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle, die nur gelesen werden kann, beschreibt die horizontale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComponentTransfer")}}-Element-Attribut {{SVGAttr("width")}} der Filterprimitive wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Wert der Eigenschaft ist eine Länge in Benutzerkoordinatensystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComponentTransfer = document.querySelector("feComponentTransfer");
const horizontalSize = feComponentTransfer.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEComponentTransferElement.height`](/de/docs/Web/API/SVGFEComponentTransferElement/height)
- Elemente {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}
