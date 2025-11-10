---
title: "SVGLinearGradientElement: x1-Eigenschaft"
short-title: x1
slug: Web/API/SVGLinearGradientElement/x1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x1`**-Eigenschaft der [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement)-Schnittstelle beschreibt die x-Achsenkoordinate des Startpunkts des Verlaufs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("x1")}}-Attributs auf dem {{SVGElement("linearGradient")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Startpunkts des Verlaufs im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
    <linearGradient id="gradient2" x1="25%" y1="0%" x2="75%" y2="100%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können auf die berechneten Werte der `x1`-Attribute zugreifen:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const x1Gradient1 = linearGradients[0].x1;
const x1Gradient2 = linearGradients[1].x1;

console.dir(x1Gradient1.baseVal.value); // output: 100 (50% of 200)
console.dir(x1Gradient2.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLinearGradientElement.x2`](/de/docs/Web/API/SVGLinearGradientElement/x2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
