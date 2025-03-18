---
title: "SVGEllipseElement: ry-Eigenschaft"
short-title: ry
slug: Web/API/SVGEllipseElement/ry
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`ry`**-Schreibgeschützte Eigenschaft der [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)-Schnittstelle beschreibt den Radius entlang der y-Achse der Ellipse als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("ry")}}-Attributs auf dem {{SVGElement("ellipse")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist der Radius der Ellipse entlang der y-Achse im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Für das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

Können wir die berechneten Werte der `ry`-Attribute abrufen:

```js
const ellipses = document.querySelectorAll("ellipse");
const ryPos0 = ellipses[0].ry;
const ryPos1 = ellipses[1].ry;

console.dir(ryPos0.baseVal.value); // output: 20
console.dir(ryPos1.baseVal.value); // output: 10 (5% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGEllipseElement.rx`](/de/docs/Web/API/SVGEllipseElement/rx)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
