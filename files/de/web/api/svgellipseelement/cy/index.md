---
title: "SVGEllipseElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGEllipseElement/cy
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`cy`**-Eigenschaft der [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)-Schnittstelle beschreibt die y-Achsen-Koordinate des Mittelpunkts der Ellipse als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("cy")}}-Attributs auf dem {{SVGElement("ellipse")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Mittelpunkts der Ellipse im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, wir haben das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

Wir können die berechneten Werte der `cy`-Attribute abrufen:

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
