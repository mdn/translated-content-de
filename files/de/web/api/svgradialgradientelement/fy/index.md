---
title: "SVGRadialGradientElement: fy-Eigenschaft"
short-title: fy
slug: Web/API/SVGRadialGradientElement/fy
l10n:
  sourceCommit: 40279617fd5bb8ab277d10bbf3637bfc3aa2b991
---

{{APIRef("SVG")}}

Die **`fy`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle beschreibt die y-Achsen-Koordinate des Brennpunkts des radialen Verlaufs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("fy")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Brennpunkts des radialen Verlaufs im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben ist das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" fx="30" fy="60" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" fx="10%" fy="40%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können die berechneten Werte der `fy`-Attribute abrufen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const fyGradient1 = radialGradients[0].fy;
const fyGradient2 = radialGradients[1].fy;

console.dir(fyGradient1.baseVal.value); // output: 60
console.dir(fyGradient2.baseVal.value); // output: 80 (40% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.fx`](/de/docs/Web/API/SVGRadialGradientElement/fx)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
