---
title: "SVGLineElement: x2-Eigenschaft"
short-title: x2
slug: Web/API/SVGLineElement/x2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x2`**-Eigenschaft ist eine schreibgeschützte Eigenschaft der [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Schnittstelle, die den x-Achsen-Koordinatenwert des Endes einer Linie als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Sie spiegelt das {{SVGElement("line")}}-Element und dessen geometrisches Attribut {{SVGAttr("x2")}} wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die Endposition entlang der x-Achse in Benutzereinheitensystem-Einheiten.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Bei folgendem SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="0" x2="30%" y2="60" stroke="red" stroke-width="4" />
</svg>
```

können wir auf die berechneten Werte der `x2`-Attribute zugreifen:

```js
const lines = document.querySelectorAll("line");
const x2Pos0 = lines[0].x2;
const x2Pos1 = lines[1].x2;
console.dir(x2Pos0.baseVal.value); // output: 40 (the value of `x2`)
console.dir(x2Pos1.baseVal.value); // output: 90 (30% of 300)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLineElement.y2`](/de/docs/Web/API/SVGLineElement/y2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
