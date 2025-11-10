---
title: "SVGEllipseElement: rx-Eigenschaft"
short-title: rx
slug: Web/API/SVGEllipseElement/rx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`rx`**-Schreibgeschützte Eigenschaft der [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)-Schnittstelle beschreibt den Radius der Ellipse entlang der x-Achse als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("rx")}}-Attributs auf dem {{SVGElement("ellipse")}}-Element wider.

Der Attributwert kann ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number) sein. Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist der Radius der Ellipse entlang der x-Achse im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Bei folgendem SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

Können wir auf die berechneten Werte der `rx`-Attribute zugreifen:

```js
const ellipses = document.querySelectorAll("ellipse");
const rxPos0 = ellipses[0].rx;
const rxPos1 = ellipses[1].rx;

console.dir(rxPos0.baseVal.value); // output: 30
console.dir(rxPos1.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGEllipseElement.ry`](/de/docs/Web/API/SVGEllipseElement/ry)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
