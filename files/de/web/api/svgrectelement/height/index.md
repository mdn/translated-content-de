---
title: "SVGRectElement: height Eigenschaft"
short-title: height
slug: Web/API/SVGRectElement/height
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die vertikale Größe eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Die Länge wird in Einheiten des Benutzerkoordinatensystems entlang der y-Achse angegeben. Ihre Syntax entspricht derjenigen für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt das präsentationell Attribut {{SVGElement("rect")}} des {{SVGAttr("height")}}-Elements wider. Die CSS-Eigenschaft {{cssxref("height")}} hat Vorrang gegenüber dem SVG `height` präsentationellen Attribut, daher kann der Wert möglicherweise nicht die tatsächliche Größe des Elements widerspiegeln. Der Standardwert ist `0`.

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
