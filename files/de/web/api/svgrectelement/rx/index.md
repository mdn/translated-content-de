---
title: "SVGRectElement: rx-Eigenschaft"
short-title: rx
slug: Web/API/SVGRectElement/rx
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die **`rx`**-Eigenschaft der Schnittstelle [`SVGRectElement`](/de/docs/Web/API/SVGRectElement) beschreibt die horizontale Kurve der Ecken eines SVG-Rechtecks als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Die Länge wird in Einheiten des Benutzerskoordinatensystems entlang der x-Achse angegeben. Die Syntax ist die gleiche wie die für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt das Präsentationsattribut {{SVGElement("rect")}}-Element {{SVGAttr("rx")}} wider. Die CSS-Eigenschaft {{cssxref("rx")}} hat Vorrang vor dem SVG-Präsentationsattribut `rx`, daher könnte der Wert nicht die tatsächliche Größe der abgerundeten Ecken widerspiegeln. Der Standardwert ist `0`, was ein Rechteck mit rechtwinkligen Ecken zeichnet.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Für das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15" />
</svg>
```

können wir die berechneten Werte der `rx`-Attribute abrufen:

```js
const rectangles = document.querySelectorAll("rect");
const rxSize0 = rectangle[0].rx;
const rxSize1 = rectangle[1].rx;
console.log(rxSize0.baseVal.value); // output: 15 (the value of `rx`)
console.log(rxSize1.baseVal.value); // output: 45 (15% of 300)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRectElement.ry`](/de/docs/Web/API/SVGRectElement/ry)
