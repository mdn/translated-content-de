---
title: "SVGRadialGradientElement: cx-Eigenschaft"
short-title: cx
slug: Web/API/SVGRadialGradientElement/cx
l10n:
  sourceCommit: 40279617fd5bb8ab277d10bbf3637bfc3aa2b991
---

{{APIRef("SVG")}}

Die **`cx`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle beschreibt die x-Achsen-Koordinate des Zentrums des radialen Gradienten als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie gibt den berechneten Wert des {{SVGAttr("cx")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wieder.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Zentrums des radialen Gradienten im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können auf die berechneten Werte der `cx`-Attribute zugreifen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const cxGradient1 = radialGradients[0].cx;
const cxGradient2 = radialGradients[1].cx;

console.dir(cxGradient1.baseVal.value); // output: 50
console.dir(cxGradient2.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.cy`](/de/docs/Web/API/SVGRadialGradientElement/cy)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)