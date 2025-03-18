---
title: "SVGFEComponentTransferElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEComponentTransferElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft des [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Interfaces beschreibt die horizontale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie reflektiert das {{SVGElement("feComponentTransfer")}}-Element's {{SVGAttr("width")}}-Filterprimitive-Attribut. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Breite der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzersystem-Koordinateneinheiten.

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
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}}-Elemente
