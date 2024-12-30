---
title: "SVGLinearGradientElement: y2-Eigenschaft"
short-title: y2
slug: Web/API/SVGLinearGradientElement/y2
l10n:
  sourceCommit: 9db11220d8fc8863f94ddb1ccb7b353a8062e144
---

{{APIRef("SVG")}}

Die **`y2`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) beschreibt die y-Achsenkoordinate des Startpunkts des Gradienten als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("y2")}}-Attributs auf dem {{SVGElement("linearGradient")}}-Element wider.

Der Attributwert ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Endpunkts des Gradienten im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, folgendes SVG:

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

Wir können die berechneten Werte der `y2`-Attribute abrufen:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const y2Gradient1 = linearGradients[0].y2;
const y2Gradient2 = linearGradients[1].y2;

console.dir(y2Gradient1.baseVal.value); // output: 200 (100% of 200)
console.dir(y2Gradient2.baseVal.value); // output: 200 (100% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLinearGradientElement.y1`](/de/docs/Web/API/SVGLinearGradientElement/y1)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
