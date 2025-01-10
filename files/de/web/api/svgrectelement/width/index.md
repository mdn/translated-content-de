---
title: "SVGRectElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGRectElement/width
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Die Länge wird in Einheiten des Benutzerkoordinatensystems entlang der x-Achse angegeben. Ihre Syntax entspricht der von [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt das Präsentationsattribut {{SVGElement("rect")}} des Elements {{SVGAttr("width")}} wider. Die CSS-{{cssxref("width")}}-Eigenschaft hat Vorrang vor dem Präsentationsattribut `width` des SVG, sodass der Wert möglicherweise nicht die tatsächliche Größe des Elements widerspiegelt. Der Standardwert ist `0`.

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
