---
title: "SVGLineElement: x1-Eigenschaft"
short-title: x1
slug: Web/API/SVGLineElement/x1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x1`** schreibgeschützte Eigenschaft der [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Schnittstelle beschreibt den Start der SVG-Linie entlang der x-Achse als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das geometrische Attribut {{SVGAttr("x1")}} des {{SVGElement("line")}}-Elements wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist diese Startposition als Länge entlang der x-Achse in Benutzersystemkoordinateneinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="0" x2="30%" y2="60" stroke="red" stroke-width="4" />
</svg>
```

Wir können auf die berechneten Werte der `x1`-Attribute zugreifen:

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
