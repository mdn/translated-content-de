---
title: "SVGEllipseElement: ry-Eigenschaft"
short-title: ry
slug: Web/API/SVGEllipseElement/ry
l10n:
  sourceCommit: 790d45bc5a147380bf7ae78e4e229038e5ce8b98
---

{{APIRef("SVG")}}

Die **`ry`** schreibgeschützte Eigenschaft des [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)-Interfaces beschreibt den y-Achsen-Radius der Ellipse als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie gibt den berechneten Wert des {{SVGAttr("ry")}}-Attributs auf dem {{SVGElement("ellipse")}}-Element wieder.

Der Attributwert ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length), ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist der Radius der Ellipse entlang der y-Achse im Benutzerkoordinatensystem.

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

Wir können die berechneten Werte der `ry`-Attribute abrufen:

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
