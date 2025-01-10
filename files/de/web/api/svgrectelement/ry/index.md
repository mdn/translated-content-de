---
title: "SVGRectElement: ry-Eigenschaft"
short-title: ry
slug: Web/API/SVGRectElement/ry
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die **`ry`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle, die nur gelesen werden kann, beschreibt die vertikale Krümmung der Ecken eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Die Länge wird in Einheiten des Benutzerskoordinatensystems entlang der y-Achse gemessen. Ihre Syntax entspricht der für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt das Präsentationsattribut {{SVGElement("rect")}} des Elements {{SVGAttr("ry")}} wider. Die CSS-Eigenschaft {{cssxref("ry")}} hat Vorrang vor dem SVG-Präsentationsattribut `ry`, sodass der Wert möglicherweise nicht die tatsächliche Größe der abgerundeten Ecken widerspiegelt. Der Standardwert ist `0`, was ein Rechteck mit rechtwinkligen Ecken zeichnet.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben folgendes SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" ry="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" ry="15%" ry="15%" />
</svg>
```

Können wir auf die berechneten Werte der `ry`-Attribute zugreifen:

```js
const rectangles = document.querySelectorAll("rect");
const rySize0 = rectangle[0].ry;
const rySize1 = rectangle[1].ry;
console.log(rySize0.baseVal.value); // output: 15 (the value of `ry`)
console.log(rySize1.baseVal.value); // output: 30 (15% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRectElement.rx`](/de/docs/Web/API/SVGRectElement/rx)
