---
title: "SVGLineElement: x1-Eigenschaft"
short-title: x1
slug: Web/API/SVGLineElement/x1
l10n:
  sourceCommit: 7c67beb9a8a6fe5c80fb06bdc39737c4d713487e
---

{{APIRef("SVG")}}

Die **`x1`**-Eigenschaft des [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Interfaces liest, beschreibt den Start der SVG-Linie entlang der x-Achse als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das geometrische Attribut {{SVGElement("line")}} des {{SVGAttr("x1")}}-Elements wider.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist diese Startposition als Länge entlang der x-Achse in Benutzereinheitensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Bei folgendem SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="0" x2="30%" y2="60" stroke="red" stroke-width="4" />
</svg>
```

können wir auf die berechneten Werte der `x1`-Attribute zugreifen:

```js
const lines = document.querySelectorAll("line");
const x1Pos0 = lines[0].x1;
const x1Pos1 = lines[1].x1;
console.dir(x1Pos0.baseVal.value); // output: 20 (the value of `x1`)
console.dir(x1Pos1.baseVal.value); // output: 45 (15% of 300)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLineElement.x2`](/de/docs/Web/API/SVGLineElement/x2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
