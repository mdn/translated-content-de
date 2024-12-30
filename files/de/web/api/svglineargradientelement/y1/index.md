---
title: "SVGLinearGradientElement: y1-Eigenschaft"
short-title: y1
slug: Web/API/SVGLinearGradientElement/y1
l10n:
  sourceCommit: 9db11220d8fc8863f94ddb1ccb7b353a8062e144
---

{{APIRef("SVG")}}

Die **`y1`**-Eigenschaft der [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) Schnittstelle beschreibt die y-Achsen-Koordinate des Startpunkts des Gradienten als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie reflektiert den berechneten Wert des {{SVGAttr("y1")}}-Attributs auf dem {{SVGElement("linearGradient")}}-Element.

Der Attributwert ist eine [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Startpunkts des Gradienten im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Bei folgendem SVG:

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

Können wir auf die berechneten Werte der `y1`-Attribute zugreifen:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const y1Gradient1 = linearGradients[0].y1;
const y1Gradient2 = linearGradients[1].y1;

console.dir(y1Gradient1.baseVal.value); // output: 0 (0% of 200)
console.dir(y1Gradient2.baseVal.value); // output: 0 (0% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLinearGradientElement.y2`](/de/docs/Web/API/SVGLinearGradientElement/y2)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
