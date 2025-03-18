---
title: "SVGRectElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGRectElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Das `<coordinate>` ist eine Länge im nutzerdefinierten Koordinatensystem, die den gegebenen Abstand vom Ursprung des Koordinatensystems entlang der x-Achse darstellt. Die Syntax entspricht derjenigen für [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt den geometrischen Attributwert {{SVGElement("rect")}} des Elements wider: {{SVGAttr("x")}}. Die CSS-Eigenschaft {{cssxref("x")}} hat Vorrang vor dem geometrischen SVG-Attribut `x`, sodass der Wert möglicherweise nicht das Erscheinungsbild des Elements widerspiegelt. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const rectangle = document.querySelector("rect");
const leftPosition = rectangle.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.x`](/de/docs/Web/API/DOMRect/x)
- [`SVGRectElement.y`](/de/docs/Web/API/SVGRectElement/y)
