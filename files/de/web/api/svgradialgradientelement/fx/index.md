---
title: "SVGRadialGradientElement: fx-Eigenschaft"
short-title: fx
slug: Web/API/SVGRadialGradientElement/fx
l10n:
  sourceCommit: 40279617fd5bb8ab277d10bbf3637bfc3aa2b991
---

{{APIRef("SVG")}}

Die **`fx`** schreibgeschützte Eigenschaft des [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Interfaces beschreibt die x-Achsen-Koordinate des Brennpunkts des Radialverlaufs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("fx")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist entweder eine [`<length>`](/de/docs/Web/SVG/Content_type#length), ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder ein [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Brennpunkts des Radialverlaufs im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Gegeben folgendes SVG:

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

Wir können die berechneten Werte der `fx`-Attribute abrufen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const fxGradient1 = radialGradients[0].fx;
const fxGradient2 = radialGradients[1].fx;

console.dir(fxGradient1.baseVal.value); // output: 30
console.dir(fxGradient2.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.fy`](/de/docs/Web/API/SVGRadialGradientElement/fy)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
