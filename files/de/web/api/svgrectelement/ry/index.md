---
title: "SVGRectElement: ry-Eigenschaft"
short-title: ry
slug: Web/API/SVGRectElement/ry
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

Die **`ry`**-Eigenschaft der Schnittstelle [`SVGRectElement`](/de/docs/Web/API/SVGRectElement) ist eine schreibgeschützte Eigenschaft, die die vertikale Kurve der Ecken eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Die Länge wird in Benutzereinheitensystemen entlang der y-Achse angegeben. Ihre Syntax entspricht der für [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das Präsentationsattribut {{SVGElement("rect")}} des `ry`-Elements wider. Die CSS-Eigenschaft {{cssxref("ry")}} hat Vorrang vor dem `ry`-Präsentationsattribut von SVG, sodass der Wert möglicherweise nicht die tatsächliche Größe der abgerundeten Ecken widerspiegelt. Der Standardwert ist `0`, was ein Rechteck mit eckigen Ecken zeichnet.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Für das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15%" />
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
