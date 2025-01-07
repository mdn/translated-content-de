---
title: "SVGLineElement: y2-Eigenschaft"
short-title: y2
slug: Web/API/SVGLineElement/y2
l10n:
  sourceCommit: 7c67beb9a8a6fe5c80fb06bdc39737c4d713487e
---

{{APIRef("SVG")}}

Die **`y2`** schreibgeschützte Eigenschaft des [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Interfaces beschreibt den v-Achsen-Koordinatenwert des Endes einer Linie als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das geometrische Attribut {{SVGElement("line")}} des Elements {{SVGAttr("y2")}} wider.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist diese Endposition entlang der y-Achse in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, das folgende SVG:

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
