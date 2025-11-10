---
title: "SVGRectElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGRectElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle ist ein schreibgeschütztes Attribut und beschreibt die horizontale Größe eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Die Länge wird in Benutzereinheitensystem entlang der x-Achse gemessen. Ihre Syntax ist dieselbe wie für [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das {{SVGElement("rect")}}-Element's präsentationsorientiertes Attribut {{SVGAttr("width")}} wider. Die CSS-{{cssxref("width")}}-Eigenschaft hat Vorrang vor dem SVG-`width`-präsentationsorientierten Attribut, daher spiegelt der Wert möglicherweise nicht die tatsächliche Größe des Elements wider. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const rectangle = document.querySelector("rect");
const rectWidth = rectangle.width;
console.log(rectWidth.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.width`](/de/docs/Web/API/DOMRect/width)
- [`SVGRectElement.height`](/de/docs/Web/API/SVGRectElement/height)
