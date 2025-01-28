---
title: "SVGEllipseElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGEllipseElement/cy
l10n:
  sourceCommit: 790d45bc5a147380bf7ae78e4e229038e5ce8b98
---

{{APIRef("SVG")}}

Die **`cy`**-Eigenschaft der Schnittstelle [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement) beschreibt die y-Achsen-Koordinate des Mittelpunkts der Ellipse als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("cy")}}-Attributs am {{SVGElement("ellipse")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage), oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Mittelpunkts der Ellipse im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

Wir können auf die berechneten Werte der `cy`-Attribute zugreifen:

```js
const ellipses = document.querySelectorAll("ellipse");
const cyPos0 = ellipses[0].cy;
const cyPos1 = ellipses[1].cy;

console.dir(cyPos0.baseVal.value); // output: 75
console.dir(cyPos1.baseVal.value); // output: 100 (50% of the viewBox height, 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGEllipseElement.cx`](/de/docs/Web/API/SVGEllipseElement/cx)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
