---
title: "SVGLinearGradientElement: x2-Eigenschaft"
short-title: x2
slug: Web/API/SVGLinearGradientElement/x2
l10n:
  sourceCommit: 9db11220d8fc8863f94ddb1ccb7b353a8062e144
---

{{APIRef("SVG")}}

Die **`x2`** schreibgeschützte Eigenschaft des [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement)-Interfaces beschreibt die x-Achsen-Koordinate des Startpunkts des Farbverlaufs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("x2")}}-Attributs auf dem {{SVGElement("linearGradient")}}-Element wider.

Der Attributwert ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Endpunkts des Farbverlaufs im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Für das folgende SVG:

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

Können wir auf die berechneten Werte der `x2`-Attribute zugreifen:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const x2Gradient1 = linearGradients[0].x2;
const x2Gradient2 = linearGradients[1].x2;

console.dir(x2Gradient1.baseVal.value); // output: 100 (50% of 200)
console.dir(x2Gradient2.baseVal.value); // output: 150 (75% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLinearGradientElement.x1`](/de/docs/Web/API/SVGLinearGradientElement/x1)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
