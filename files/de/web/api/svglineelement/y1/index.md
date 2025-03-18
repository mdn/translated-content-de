---
title: "SVGLineElement: y1-Eigenschaft"
short-title: y1
slug: Web/API/SVGLineElement/y1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y1`** schreibgeschützte Eigenschaft des [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)-Interfaces beschreibt den Startpunkt der SVG-Linie entlang der y-Achse als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das {{SVGElement("line")}}-Element-Attribut {{SVGAttr("y1")}} wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist diese Startposition als Länge entlang der y-Achse in Benutzereinheiten des Koordinatensystems.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Für das folgende SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="5%" x2="30%" y2="60%" stroke="red" stroke-width="4" />
</svg>
```

können wir auf die berechneten Werte der `y1`-Attribute zugreifen:

```js
const lines = document.querySelectorAll("line");
const y1Pos0 = lines[0].y1;
const y1Pos1 = lines[1].y1;
console.dir(y1Pos0.baseVal.value); // output: 30 (the value of `y1`)
console.dir(y1Pos1.baseVal.value); // output: 10 (5% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLineElement.y2`](/de/docs/Web/API/SVGLineElement/y2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
