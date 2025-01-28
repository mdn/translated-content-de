---
title: "SVGEllipseElement: cx-Eigenschaft"
short-title: cx
slug: Web/API/SVGEllipseElement/cx
l10n:
  sourceCommit: 790d45bc5a147380bf7ae78e4e229038e5ce8b98
---

{{APIRef("SVG")}}

Die **`cx`** Schreibgeschützt-Eigenschaft des [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)-Interfaces beschreibt die x-Achsen-Koordinate des Zentrums der Ellipse als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("cx")}}-Attributs auf dem {{SVGElement("ellipse")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Zentrums der Ellipse im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

Wir können auf die berechneten Werte der `cx`-Attribute zugreifen:

```js
const ellipses = document.querySelectorAll("ellipse");
const cxPos0 = ellipses[0].cx;
const cxPos1 = ellipses[1].cx;

console.dir(cxPos0.baseVal.value); // output: 50
console.dir(cxPos1.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGEllipseElement.cy`](/de/docs/Web/API/SVGEllipseElement/cy)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
