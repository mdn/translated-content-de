---
title: "SVGLineElement: y2-Eigenschaft"
short-title: y2
slug: Web/API/SVGLineElement/y2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y2`**-Schreibgeschützte Eigenschaft der [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Schnittstelle beschreibt den v-Achsen-Koordinatenwert des Endes einer Linie als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das {{SVGElement("line")}}-Element's {{SVGAttr("y2")}} geometrisches Attribut wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist diese Endposition entlang der y-Achse in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben sei das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="5%" x2="30%" y2="60%" stroke="red" stroke-width="4" />
</svg>
```

Wir können auf die berechneten Werte der `y2`-Attribute zugreifen:

```js
const lines = document.querySelectorAll("line");
const y2Pos0 = lines[0].y2;
const y2Pos1 = lines[1].y2;
console.dir(y2Pos0.baseVal.value); // output: 50 (the value of `y2`)
console.dir(y2Pos1.baseVal.value); // output: 120 (60% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLineElement.x2`](/de/docs/Web/API/SVGLineElement/x2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
