---
title: "SVGRectElement: rx-Eigenschaft"
short-title: rx
slug: Web/API/SVGRectElement/rx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`rx`**-Eigenschaft des [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die die horizontale Kurve der Ecken eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Die Länge wird in Benutzerkoordinateneinheiten entlang der x-Achse angegeben. Ihre Syntax entspricht der für [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das präsentationsbezogene Attribut {{SVGElement("rect")}} des Elements {{SVGAttr("rx")}} wider. Die CSS-Eigenschaft {{cssxref("rx")}} hat Vorrang vor dem SVG-`rx`-Attribut, sodass der Wert möglicherweise nicht die tatsächliche Größe der abgerundeten Ecken widerspiegelt. Der Standardwert ist `0`, was ein Rechteck mit rechtwinkligen Ecken zeichnet.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15" />
</svg>
```

Können wir auf die berechneten Werte der `rx`-Attribute zugreifen:

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
