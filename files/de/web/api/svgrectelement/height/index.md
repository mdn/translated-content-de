---
title: "SVGRectElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGRectElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die vertikale Größe eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Die Länge wird in Einheiten des Benutzerkoordinatensystems entlang der y-Achse angegeben. Die Syntax entspricht der für [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das präsentationelle Attribut {{SVGElement("rect")}} des Elements {{SVGAttr("height")}} wider. Die CSS-Eigenschaft {{cssxref("height")}} hat Vorrang vor dem SVG-`height`-Präsentationsattribut, sodass der Wert möglicherweise nicht die tatsächliche Größe des Elements widerspiegelt. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const rectangle = document.querySelector("rect");
const rectHeight = rectangle.height;
console.log(rectHeight.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.height`](/de/docs/Web/API/DOMRect/height)
- [`SVGRectElement.width`](/de/docs/Web/API/SVGRectElement/width)
